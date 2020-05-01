import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SocketService } from './socket.service';
import { GameService } from './game/game.service';

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
    private router: Router,
    private socketService: SocketService
  ) {}

  async ngOnInit() {
    this.authService.autoLogin();

    this.socketSub = this.socketService.listen('start_game').subscribe(() => {
      this.router.navigate(['/game']);
      this.gameService.startGame();
    });

    this.userSub = this.authService.user.subscribe((user) => {
      this.user = user;
    });

    let context = this;
    window.addEventListener('beforeunload', async (e) => {
      if (context.user)
        await context.authService
          .changeStatus(this.user.email, false)
          .toPromise();
    });
  }

  async ngOnDestroy() {
    this.userSub.unsubscribe();
    this.socketSub.unsubscribe();
    await this.authService.changeStatus(this.user.email, false).toPromise();
  }
}
