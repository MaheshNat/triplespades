import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './auth/auth.guard';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: 'auth', component: AuthComponent },
  { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'scoreboard', component: ScoreboardComponent },
  //register canActivate: AuthGuard for components which need guarding
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
