import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component'

const routes: Routes = [
  {
    path: '',
    pathMatch:'Full',
    component: HomeComponent,
  },
  {
    path:'Login',
    component:LoginComponent
    },
    {
      path:'Scoreboard',
      component:ScoreboardComponent
    },
  {
  path:'Game',
  component:GameComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [
      RouterModule
    ],
})
export class AppRoutingModule {}