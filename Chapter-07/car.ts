export abstract class Car {
  private _model: string;
  private _mark: string;

  public constructor(theMark: string, theModel: string) {
    this._mark = theMark;
    this._model = theModel;
  }

  public get model(): string {
    return this._model;
  }
  public set model(value: string) {
    this._model = value;
  }
  public get mark(): string {
    return this._mark;
  }
  public set mark(value: string) {
    this._mark = value;
  }

  // protected print() {
  //   return `${this._mark} ${this._model}`;
  // }
  abstract print(): string;
}