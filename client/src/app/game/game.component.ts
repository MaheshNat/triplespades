import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';
import { Card } from './card.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  players: Player[] = [];
  cards: Card[] = [];
  user: User;

  highestBidPlayer = new Player('None', true, 125);
  bidValue = 125;

  constructor(
    private socketService: SocketService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });

    this.http
      .get<Player[]>('http://127.0.0.1:5000/users')
      .subscribe((players) => {
        this.players = players;
      });

    this.http.get<Card[]>('http://127.0.0.1:5000/cards').subscribe((cards) => {
      this.cards = cards;
      console.log(cards);
    });

    this.socketService.listen('bid').subscribe((data: Player) => {
      this.players.forEach((player) => (player.highestBidder = false));
      let index = this.players.findIndex((player) => player.name === data.name);
      this.players[index].highestBidder = true;
      this.players[index].bid = data.bid;
      this.highestBidPlayer = new Player(data.name, true, data.bid, true);
    });
  }

  onBid() {
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
}
