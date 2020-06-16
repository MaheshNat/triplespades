import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './game/auth.guard';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import{ScoreboardComponent } from'./scoreboard/scoreboard.component';

  @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    HomeComponent,
    ScoreboardComponent,
  ],
  imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
