import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';
import { Game } from '../game/game.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  isCollapsed = false;
  private userSub: Subscription;
  private gameSub: Subscription;
  game: Game;

  constructor(
    private authService: AuthService,
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    this.gameSub = this.gameService.game.subscribe((game) => {
      this.game = game;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.gameSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout().subscribe((resData) => {
      this.router.navigate(['/auth']);
    });
  }
}
