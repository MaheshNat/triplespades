import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { HeaderComponent } from './header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';
import { SharedModule } from './shared/shared.module';
import { RecipeComponent } from './recipe/recipe.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    GameComponent,
    ScoreboardComponent,
    HeaderComponent,
    WaitingRoomComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    SharedModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
