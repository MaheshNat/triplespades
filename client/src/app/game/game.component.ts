import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service';
import { Card } from './card.model';
import { GameService } from './game.service';
import { Game } from './game.model';

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
  bidValue = 125;
  time = 30;
  selection = false;

  constructor(
    private socketService: SocketService,
    private http: HttpClient,
    private authService: AuthService,
    private gameService: GameService
  ) {}

  ngOnInit() {
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
      this.selection = true;
    });

    setInterval(() => {
      if (this.time > 0) this.time--;
    }, 1000);
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
