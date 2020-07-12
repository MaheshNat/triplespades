import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SocketService } from './socket.service';
import { GameService } from './game/game.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private userSub: Subscription;
  private socketSub: Subscription;
  user: User;

  constructor(
    private authService: AuthService,
    private gameService: GameService,
    private socketService: SocketService
  ) {}

  async ngOnInit() {
    // this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe((user) => {
      this.user = user;
    });
    let context = this;
    window.addEventListener('beforeunload', async (e) => {
      await context.socketService.emit('leave', context.user.name);
    });
  }

  async ngOnDestroy() {
    this.userSub.unsubscribe();
    this.socketSub.unsubscribe();
  }
}
