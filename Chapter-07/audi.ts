import { Car } from "./car";

export class Audi extends Car {
  print(): string {
    return `${this.mark} ${this.model}`;
  }

  // public getInfo(): string {
  //   return super.print();
  // }
}