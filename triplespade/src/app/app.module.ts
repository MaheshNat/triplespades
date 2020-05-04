import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'Game',
    canActivate: [AuthguardGuard],
    component: GameComponent
  }
]


@NgModule({
  declarations: [AppComponent, LoginComponent, GameComponent],
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
