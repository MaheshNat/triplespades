import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game.model';
import { HttpClient } from '@angular/common/http';
import { Player } from '../shared/player.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game = new BehaviorSubject<Game>(new Game(null, false));

  constructor() {}

  startGame(defaultBidder: string) {
    this.game.next(new Game(new Player(defaultBidder, true, 125, true), true));
  }
}
