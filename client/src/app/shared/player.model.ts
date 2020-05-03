export class Player {
  constructor(
    public name: string,
    public authenticated: boolean,
    public bid?: number,
    public highestBidder?: boolean
  ) {}
}
