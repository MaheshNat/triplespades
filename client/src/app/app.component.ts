import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SocketService } from './socket.service';

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
    private router: Router,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.authService.autoLogin().subscribe((resData) => {
      this.router.navigate(['/waiting-room']);
    });

    this.socketSub = this.socketService.listen('start_game').subscribe(() => {
      this.router.navigate(['/game']);
    });

    this.userSub = this.authService.user.subscribe((user) => {
      this.user = user;
    });

    let context = this;
    window.addEventListener('beforeunload', function (e) {
      if (context.user) context.authService.logout().subscribe();
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.authService.logout().subscribe();
  }
}
