import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './auth/auth.guard';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'waiting-room',
    component: WaitingRoomComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard],
  },
  { path: 'scoreboard', component: ScoreboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
