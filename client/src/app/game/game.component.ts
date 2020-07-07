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

  playCard(card: Card) {
    if (this.user.name === this.game.players[this.game.turn].name) {
      if (this.game.hand.length === this.game.players.length - 1)
        this.socketService.emit('hand_end', card);
      else this.socketService.emit('play_card', card);
    }
  }
}
