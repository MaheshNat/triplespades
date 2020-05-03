export class Recipe {
  constructor(
    public _id: { $oid: string },
    public name: string,
    public description: string
  ) {}
}
