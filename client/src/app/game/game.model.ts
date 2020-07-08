import { Player } from '../shared/player.model';
import { Card } from './card.model';

export class Game {
  constructor(
    public highestBidPlayer: Player,
    public started?: boolean,
    public gameMode?: GameMode,
    public cards?: Card[],
    public players?: Player[],
    public turn?: number,
    public hand: Card[] = [],
    public collectedCards: Card[] = [],
    public trumpSuit?: string,
    public partnerCard?: Card,
    public time: number = 30
  ) {}
}

export enum GameMode {
  BIDDING,
  TRUMP_SELECTION,
  PARTNER_SELECTION,
  PLAYING,
  END,
}
