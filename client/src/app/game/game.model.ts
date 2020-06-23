import { Player } from '../shared/player.model';

export class Game {
  constructor(public highestBidPlayer: Player, public started?: boolean) {}
}
