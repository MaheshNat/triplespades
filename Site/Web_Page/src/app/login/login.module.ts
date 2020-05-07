export class login {
  constructor(
    public _id: { $oid: string },
    public email: string,
    public password: string
  ) {}
}