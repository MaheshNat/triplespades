import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Player } from '../player.model';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css'],
})
export class WaitingRoomComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  subscriptions: Subscription[] = [];

  constructor(private socketService: SocketService, private http: HttpClient) {}

  ngOnInit() {
    this.subscriptions.push(
      this.http
        .get<Player[]>('http://127.0.0.1:5000/users')
        .subscribe((players) => {
          this.players = players;
          console.log(players);
          this.subscriptions.push(
            this.socketService.listen('join').subscribe((player: Player) => {
              console.log(`${player.name} joined`);
              let index = this.players.findIndex(
                (_player) => _player.name === player.name
              );
              this.players[index].authenticated = true;
            })
          );
        })
    );
    this.subscriptions.push(
      this.socketService.listen('leave').subscribe((player: Player) => {
        console.log(`${player.name} left`);
        this.players[
          this.players.findIndex((_player) => _player.name === player.name)
        ].authenticated = false;
      })
    );
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) subscription.unsubscribe();
  }
}
