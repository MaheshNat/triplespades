import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'Login',
    component:LoginComponent
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