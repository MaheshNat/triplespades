import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Player } from '../shared/player.model';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css'],
})
export class WaitingRoomComponent implements OnInit, OnDestroy {
  players: Player[] = [];

  constructor(
    private socketService: SocketService,
    private gameService: GameService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http
      .get<Player[]>('http://127.0.0.1:5000/users')
      .subscribe((players) => {
        this.players = players;
        console.log(players);

        this.socketService.listen('join').subscribe((player: Player) => {
          console.log(`${player.name} joined`);
          let index = this.players.findIndex(
            (_player) => _player.name === player.name
          );
          this.players[index].authenticated = true;
        });
      });

    this.socketService.listen('leave').subscribe((player: Player) => {
      console.log(`${player.name} left`);
      this.players[
        this.players.findIndex((_player) => _player.name === player.name)
      ].authenticated = false;
    });

    this.socketService
      .listen('start_game')
      .subscribe((defaultBidder: string) => {
        this.router.navigate(['/game']);
        this.gameService.startGame(defaultBidder);
      });
  }

  ngOnDestroy() {}
}
