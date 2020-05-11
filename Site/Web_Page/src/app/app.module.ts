import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import{ScoreboardComponent } from'./scoreboard/scoreboard.component';
import { TestComponent } from './test/test.component';

const appRoutes:Routes = [
  
  {
    path: '',
    component: HomeComponent
  },{
    path: 'Login',
    component: LoginComponent
  },
  {
    path:'Scoreboard',
    component:ScoreboardComponent
  },
  {
    path: 'Game',
    canActivate: [AuthguardGuard],
    component: GameComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    HomeComponent,
    ScoreboardComponent,
    TestComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  FormsModule,
  ReactiveFormsModule

  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
