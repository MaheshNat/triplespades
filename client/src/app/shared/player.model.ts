export class Player {
  constructor(
    public name: string,
    public bid?: number,
    public highestBidder?: boolean
  ) {}
}
