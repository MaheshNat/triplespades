import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game, GameMode } from './game.model';
import { HttpClient } from '@angular/common/http';
import { Player } from '../shared/player.model';
import { Card } from './card.model';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game = new BehaviorSubject<Game>(new Game(null, false));
  gameValue: Game;
  timeInterval;
  selectionStartTimeout;
  trumpSelectionTimeout;
  partnerCardSelectionTimeout;
  TRUMP_SELECTION_TIME = 15_000;
  PARTNER_CARD_SELECTION_TIME = 15_000;
  BIDDING_TIME = 30_000;
  allCards: Card[];
  user: User;

  constructor(
    private socketService: SocketService,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });

    this.http.get<Card[]>('http://127.0.0.1:5000/cards').subscribe((cards) => {
      this.allCards = cards;
    });

    this.game.subscribe((game) => (this.gameValue = game));

    this.socketService.listen('bid').subscribe((data: Player) => {
      this.gameValue.highestBidPlayer = new Player(
        data.name,
        true,
        data.bid,
        true
      );
      this.game.next(this.gameValue);
    });

    this.socketService.listen('start_selection').subscribe((data) => {
      clearInterval(this.timeInterval);
      clearTimeout(this.selectionStartTimeout);
      this.gameValue.gameMode = GameMode.TRUMP_SELECTION;
      this.game.next(this.gameValue);

      if (this.user.name === this.gameValue.highestBidPlayer.name) {
        this.trumpSelectionTimeout = setTimeout(() => {
          clearInterval(this.timeInterval);
          this.gameValue.trumpSuit = ['S', 'C', 'H', 'D'][
            Math.floor(Math.random() * 4)
          ];
          this.socketService.emit('trump_selection', this.gameValue.trumpSuit);
          this.gameValue.gameMode = GameMode.PARTNER_SELECTION;
          this.game.next(this.gameValue);
        }, this.TRUMP_SELECTION_TIME);

        this.gameValue.time = this.TRUMP_SELECTION_TIME / 1000;
        this.timeInterval = setInterval(() => {
          if (this.gameValue.time > 0) this.gameValue.time--;
          this.game.next(this.gameValue);
        }, 1000);
      }
    });

    this.socketService
      .listen('trump_selection')
      .subscribe((trumpSuit: string) => {
        this.gameValue.trumpSuit = trumpSuit;
        this.gameValue.gameMode = GameMode.PARTNER_SELECTION;
        this.game.next(this.gameValue);

        if (this.user.name === this.gameValue.highestBidPlayer.name) {
          this.partnerCardSelectionTimeout = setTimeout(() => {
            clearInterval(this.timeInterval);
            this.gameValue.partnerCard = this.allCards[
              Math.floor(Math.random() * this.allCards.length)
            ];
            this.socketService.emit(
              'partner_selection',
              this.gameValue.partnerCard
            );
            this.game.next(this.gameValue);
          }, this.PARTNER_CARD_SELECTION_TIME);

          this.gameValue.time = this.PARTNER_CARD_SELECTION_TIME / 1000;
          this.timeInterval = setInterval(() => {
            if (this.gameValue.time > 0) this.gameValue.time--;
            this.game.next(this.gameValue);
          }, 1000);
        }
      });

    this.socketService
      .listen('partner_selection')
      .subscribe((partnerCard: Card) => {
        this.gameValue.partnerCard = partnerCard;
        this.game.next(this.gameValue);
      });

    this.socketService.listen('start_playing').subscribe((turn: number) => {
      this.gameValue.turn = turn;
      this.gameValue.gameMode = GameMode.PLAYING;
      this.game.next(this.gameValue);
    });

    this.socketService.listen('play_card').subscribe((card: Card) => {
      this.gameValue.hand.push(card);
      this.gameValue.turn =
        (this.gameValue.turn + 1) % this.gameValue.players.length;
      this.game.next(this.gameValue);
    });

    this.socketService.listen('hand_end').subscribe((card: Card) => {
      this.gameValue.hand.push(card);
      this.gameValue.turn = this.getHandWinner();
      console.log(this.gameValue.turn);
      if (this.user.name === this.gameValue.players[this.gameValue.turn].name) {
        this.gameValue.collectedCards = this.gameValue.collectedCards.concat(
          this.gameValue.hand
        );
      }
      this.gameValue.hand = [];
      this.game.next(this.gameValue);
    });

    this.socketService.listen('end_game').subscribe(() => {
      this.game.next(new Game(null, false));
      clearInterval(this.timeInterval);
      clearTimeout(this.selectionStartTimeout);
      this.router.navigate(['/']);
    });
  }

  startGame(defaultBidder: string, cards: Card[], players: Player[]) {
    const game = new Game(
      new Player(defaultBidder, true, 125, true),
      true,
      GameMode.BIDDING,
      cards,
      players
    );
    this.game.next(game);

    this.timeInterval = setInterval(() => {
      if (game.time > 0) game.time--;
      this.game.next(game);
    }, 1000);
    this.selectionStartTimeout = setTimeout(() => {
      this.socketService.emit('start_selection', null);
    }, this.BIDDING_TIME);
  }

  onTrumpSuitSelection(trumpSuit: string) {
    clearTimeout(this.trumpSelectionTimeout);
    clearTimeout(this.timeInterval);

    this.gameValue.trumpSuit = trumpSuit;
    this.gameValue.gameMode = GameMode.PARTNER_SELECTION;
    this.game.next(this.gameValue);

    this.socketService.emit('trump_selection', trumpSuit);
  }

  onPartnerCardSelection(partnerCard: Card) {
    clearTimeout(this.partnerCardSelectionTimeout);
    clearTimeout(this.timeInterval);

    this.gameValue.partnerCard = partnerCard;
    this.gameValue.gameMode = GameMode.PLAYING;
    this.game.next(this.gameValue);

    this.socketService.emit('partner_selection', partnerCard);
    this.socketService.emit(
      'start_playing',
      this.gameValue.players.findIndex(
        (player) => player.name === this.gameValue.highestBidPlayer.name
      )
    );
  }

  getHandWinner() {
    let shiftedPlayers = this.gameValue.players.slice();
    if (this.gameValue.turn !== this.gameValue.players.length - 1)
      shiftedPlayers = this.gameValue.players
        .slice(this.gameValue.turn + 1)
        .concat(this.gameValue.players.slice(0, this.gameValue.turn + 1));
    let winner = 0;
    let winnerCard = this.gameValue.hand[0];
    for (let i = 1; i < this.gameValue.hand.length; i++) {
      let card = this.gameValue.hand[i];

      if (winnerCard.suit.charAt(0) === this.gameValue.trumpSuit) {
        if (
          card.suit.charAt(0) === this.gameValue.trumpSuit &&
          parseInt(card.rank) > parseInt(winnerCard.rank)
        ) {
          winner = i;
          winnerCard = card;
        }
      } else {
        if (card.suit.charAt(0) === this.gameValue.trumpSuit) {
          winner = i;
          winnerCard = card;
        } else if (
          parseInt(card.rank) > parseInt(winnerCard.rank) &&
          card.suit === this.gameValue.hand[0].suit
        ) {
          winner = i;
          winnerCard = card;
        }
      }
    }
    console.log(this.gameValue.hand, winner, winnerCard);
    return this.gameValue.players.findIndex(
      (player) => player === shiftedPlayers[winner]
    );
  }
}
