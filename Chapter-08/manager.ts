import { Employee } from "./employee";

export class Manager implements Employee {
  age: number;
  salary: number;
  private _fullName: string;

  constructor(firstName: string, lastName: string) {
    this.fullName = `${firstName} ${lastName}`;
  }

  get fullName(): string {
    return this._fullName;
  }

  private set fullName(value: string) {
    this._fullName = value;
  }

}