import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';
import { Card } from './card.model';
import { GameService } from './game.service';
import { Game } from './game.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  cards: Card[] = [];
  game: Game;
  user: User;
  isLoading: boolean;
  gameMode = 'BIDDING';
  bidValue = 125;
  time = 30;
  suits = [];
  trumpSuit = '';
  partnerCard = '';
  trumpSelection = true;
  allCards = [
    '2C',
    '3C',
    '4C',
    '5C',
    '6C',
    '7C',
    '8C',
    '9C',
    '10C',
    'JC',
    'QC',
    'KC',
    'AC',
    '2D',
    '3D',
    '4D',
    '5D',
    '6D',
    '7D',
    '8D',
    '9D',
    '10D',
    'JD',
    'QD',
    'KD',
    'AD',
    '2H',
    '3H',
    '4H',
    '5H',
    '6H',
    '7H',
    '8H',
    '9H',
    '10H',
    'JH',
    'QH',
    'KH',
    'AH',
    '2S',
    '3S',
    '4S',
    '5S',
    '6S',
    '7S',
    '8S',
    '9S',
    '10S',
    'JS',
    'QS',
    'KS',
  ];

  constructor(
    private socketService: SocketService,
    private http: HttpClient,
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
    for (let i = 0; i < this.allCards.length; i++)
      this.allCards[
        i
      ] = `../../assets/images/playing_cards/${this.allCards[i]}.png`;
    this.authService.user.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });

    this.gameService.game.subscribe((game) => {
      this.game = game;
    });

    this.isLoading = true;
    this.http.get<Card[]>('http://127.0.0.1:5000/cards').subscribe((cards) => {
      this.cards = cards;
      this.isLoading = false;
      console.log(cards);
    });

    this.socketService.listen('bid').subscribe((data: Player) => {
      this.gameService.game.next(
        new Game(new Player(data.name, true, data.bid, true), true)
      );
    });

    this.socketService.listen('start_selection').subscribe(() => {
      this.gameMode = 'SELECTION';
    });

    this.socketService.listen('selection_end').subscribe((data: any) => {
      this.trumpSuit = data.trumpSuit;
      this.partnerCard = data.partnerCard;
      this.gameMode = 'PLAYING';
      console.log(this.trumpSuit, this.partnerCard);
    });

    setInterval(() => {
      if (this.time > 0) this.time--;
    }, 1000);
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

  onSelect(partnerCard: string) {
    this.partnerCard = partnerCard;
    this.socketService.emit('selection_end', {
      trumpSuit: this.trumpSuit,
      partnerCard: partnerCard.substring(34, 36),
    });
  }
}
