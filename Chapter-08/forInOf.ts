import { Employee } from "./employee";

const worker: Employee = {
  fullName: "full name",
  age: 123,
  salary: 22,
}

for (const propName in worker) {
  console.log(propName, ": ", worker[propName]);
}

// Type 'Employee' is not an array type or a string type.
// for (const prop of worker) {
//   console.log(prop);
// }