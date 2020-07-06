import { Player } from '../shared/player.model';

export class Game {
  constructor(
    public highestBidPlayer: Player,
    public started?: boolean,
    public gameMode?: GameMode
  ) {}
}

export class GameBuilder {
  constructor(
    public highestBidPlayer?: Player,
    public started?: boolean,
    public gameMode?: GameMode
  ) {}

  public;
}

export enum GameMode {
  BIDDING,
  TRUMP_SELECTION,
  PARTNER_SELECTION,
  PLAYING,
}
