import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game = new BehaviorSubject<Game>(new Game(false));

  constructor(private http: HttpClient) {}

  startGame() {
    this.game.next(new Game(true));
  }
}
