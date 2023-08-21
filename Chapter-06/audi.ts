import { Car } from "./car";

export class Audi extends Car {
  public getInfo(): string {
    return super.print();
  }
}