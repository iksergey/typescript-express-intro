class Employee {

  private fName: string;
  private lName: string;

  constructor(first: string, last: string) {
    this.fName = first;
    this.lName = last;
  }

  public print = () => {
    console.log(`Full name: ${this.fName} ${this.lName}`);
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

  public set lastName(value: string) {
    this.lName = value;
  }
}


let emp = new Employee("John", "Smith");

emp.print();
console.log(emp.firstName);
// console.log(emp.fName);
console.log(emp.lastName);
// Property 'lastName' is private and only accessible within class 'Employee'.
emp.lastName = "Show";
console.log(emp.lastName);