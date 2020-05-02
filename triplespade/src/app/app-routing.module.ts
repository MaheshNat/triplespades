import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'header',
    component: HeaderComponent,
  },
  { path: 'scoreboard', component: ScoreboardComponent },
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