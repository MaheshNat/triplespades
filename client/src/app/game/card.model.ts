export class Card {
  constructor(
    public suit: string,
    public name: string,
    public rank: string,
    public pointValue: number,
    public image: string
  ) {}

  public short() {
    return `${this.name} of ${this.suit}s`;
  }
}
