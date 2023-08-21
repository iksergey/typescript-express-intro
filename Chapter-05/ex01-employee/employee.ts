class Employee1 {

  firstName: string;
  lastName: string;

  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;
  }

  print = () => {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
  }
}

let emp = new Employee("John", "Smith");

emp.print();
console.log(emp.firstName);
console.log(emp.lastName);
