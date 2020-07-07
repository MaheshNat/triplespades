import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onNavigate() {
    if (this.isAuthenticated && this.gameService.game.value.started)
      this.router.navigate(['/game']);
    else if (this.isAuthenticated) this.router.navigate(['/waiting-room']);
    else this.router.navigate(['/auth']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
