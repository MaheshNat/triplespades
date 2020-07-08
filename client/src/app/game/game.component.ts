import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../shared/player.model';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';
import { Card } from './card.model';
import { GameService } from './game.service';
import { Game, GameMode } from './game.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  game: Game;
  user: User;
  bidValue = 125;
  suits = [];
  gameMode = GameMode;
  wrongSuit = false;
  wrongTrump = false;

  constructor(
    private socketService: SocketService,
    private authService: AuthService,
    private gameService: GameService,
    private modalService: NgbModal
  ) {}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  ngOnInit() {
    for (let suit of ['AC', 'AD', 'AH', 'AS'])
      this.suits.push('../../assets/images/playing_cards/' + suit + '.png');

    this.authService.user.subscribe((user) => {
      this.user = user;
    });

    this.gameService.game.subscribe((game) => {
      this.game = game;
    });
  }

  onBid() {
    if (this.bidValue === 250)
      this.socketService.emit('max_bid', {
        name: this.user.name,
        bid: 250,
      });
    else
      this.socketService.emit('bid', {
        name: this.user.name,
        bid: this.bidValue,
      });
  }

  incrementBidValue() {
    this.bidValue += this.bidValue === 250 ? 0 : 5;
  }

  decrementBidValue() {
    this.bidValue -= this.bidValue === 125 ? 0 : 5;
  }

  getImage(card: Card) {
    return `assets/images/playing_cards/${
      card.name.toUpperCase() + card.suit.charAt(0).toUpperCase()
    }.png`;
  }

  getSuit(suit: string) {
    switch (suit) {
      case 'H':
        return 'Hearts';
      case 'S':
        return 'Spades';
      case 'C':
        return 'Clubs';
      case 'D':
        return 'Diamonds';
    }
  }

  playCard(card: Card) {
    if (this.user.name === this.game.players[this.game.turn].name) {
      if (
        this.game.hand.length > 0 &&
        card.suit !== this.game.hand[0].suit &&
        this.game.cards.findIndex(
          (card) => card.suit === this.game.hand[0].suit
        ) !== -1 &&
        card.suit.charAt(0) !== this.game.trumpSuit
      ) {
        this.wrongTrump = false;
        this.wrongSuit = true;
      } else if (
        this.game.hand.length > 0 &&
        card.suit.charAt(0) === this.game.trumpSuit &&
        this.game.cards.findIndex(
          (card) => card.suit === this.game.hand[0].suit
        ) !== -1 &&
        this.game.hand[0].suit.charAt(0) !== this.game.trumpSuit
      ) {
        this.wrongSuit = false;
        this.wrongTrump = true;
      } else {
        this.game.cards.splice(
          this.game.cards.findIndex((_card) => _card === card),
          1
        );
        if (this.game.hand.length === this.game.players.length - 1) {
          if (this.game.cards.length === 0)
            this.socketService.emit('playing_end', null);
          this.socketService.emit('hand_end', card);
        } else this.socketService.emit('play_card', card);
        this.gameService.game.next(this.game);
        this.wrongSuit = false;
        this.wrongTrump = false;
      }
    }
  }
}
