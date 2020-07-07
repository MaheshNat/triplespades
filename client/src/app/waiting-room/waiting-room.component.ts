import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Player } from '../shared/player.model';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';
import { Card } from '../game/card.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css'],
})
export class WaitingRoomComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  name: string;

  constructor(
    private socketService: SocketService,
    private gameService: GameService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http
      .get<string[]>('http://127.0.0.1:5000/players')
      .subscribe((players) => {
        this.players = players.map((player) => new Player(player, true));

        this.socketService.listen('join').subscribe((player: Player) => {
          console.log(`${player.name} joined`);
          let index = this.players.findIndex(
            (_player) => _player.name === player.name
          );
          this.players[index].authenticated = true;
        });
      });

    this.authService.user.subscribe((user) => {
      this.name = user.name;
    });

    this.socketService.listen('join').subscribe((player: Player) => {
      console.log(`${player.name} joined`);
      this.players.push(player);
    });

    this.socketService.listen('leave').subscribe((player: Player) => {
      console.log(`${player.name} left`);
      this.players.splice(
        this.players.findIndex((_player) => _player.name === player.name),
        1
      );
    });

    this.socketService
      .listen('start_game')
      .subscribe((data: { default_bidder: string; cards: [Card[]] }) => {
        this.gameService.startGame(
          data['default_bidder'],
          data['cards'][
            this.players.findIndex((player) => player.name === this.name)
          ],
          this.players
        );
        this.router.navigate(['/game']);
      });
  }

  ngOnDestroy() {}
}
