import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Player } from '../shared/player.model';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';
import { Card } from '../game/card.model';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css'],
})
export class WaitingRoomComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  user: User;

  constructor(
    private socketService: SocketService,
    private gameService: GameService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http
      .get<string[]>(`${environment.apiUrl}/players`)
      .subscribe((players) => {
        this.players = players.map((player) => new Player(player));
      });

    this.authService.user.subscribe((user) => {
      this.user = user;
    });
    this.socketService.emit('join', this.user.name);

    this.socketService.listen('join').subscribe((playerName: string) => {
      console.log(`${playerName} joined`);
      this.players.push(new Player(playerName));
    });

    this.socketService.listen('leave').subscribe((playerName: string) => {
      console.log(`${playerName} left`);
      this.players.splice(
        this.players.findIndex((_player) => _player.name === playerName),
        1
      );
    });

    this.socketService
      .listen('start_game')
      .subscribe((data: { default_bidder: string; cards: [Card[]] }) => {
        this.gameService.startGame(
          data['default_bidder'],
          data['cards'][
            this.players.findIndex((player) => player.name === this.user.name)
          ],
          this.players,
          new Date()
        );
        this.router.navigate(['/game']);
      });
  }

  ngOnDestroy() {}
}
