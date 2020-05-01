export class User {
  constructor(
    public name: string,
    public email: string,
    private _token: string,
    private _tokenExpirationDate: Date,
    public authenticated?: boolean
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
      return null;
    return this._token;
  }
}
