class Employee {

  private fName: string;
  private lName: string;

  constructor(first: string, last: string) {
    this.fName = first;
    this.lName = last;
  }

  public print = () => {
    console.log(`Employee >> Full name: ${this.fName} ${this.lName}`);
  }

  public get firstName(): string {
    return this.fName;
  }

  public set firstName(value: string) {
    this.fName = value;
  }

  public get lastName(): string {
    return this.lName;
  }

  private set lastName(value: string) {
    this.lName = value;
  }
}

export default Employee;