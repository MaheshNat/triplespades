import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../socket.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../auth/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css'],
})
export class WaitingRoomComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscriptions: Subscription[] = [];

  constructor(private socketService: SocketService, private http: HttpClient) {}

  ngOnInit() {
    this.subscriptions.push(
      this.http
        .get<User[]>('http://127.0.0.1:5000/users')
        .subscribe((users) => {
          this.users = users;
          console.log(users);
          this.subscriptions.push(
            this.socketService.listen('join').subscribe((user: User) => {
              console.log(`${user.email} joined`);
              let index = this.users.findIndex(
                (_user) => _user.email === user.email
              );
              this.users[index].authenticated = true;
            })
          );
        })
    );
    this.subscriptions.push(
      this.socketService.listen('leave').subscribe((user: User) => {
        console.log(`${user.email} left`);
        this.users[
          this.users.findIndex((_user) => _user.email === user.email)
        ].authenticated = false;
      })
    );
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) subscription.unsubscribe();
  }
}
