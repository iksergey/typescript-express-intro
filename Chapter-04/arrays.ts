// let array = ["1", "one", "two", "three", 123, false];
let items: string[] = ["1", "one", "two", "three"];

// console.log(items[0] == 1);
console.log(items[1] == "one");

let numbers: number[] = [1, 2.1, 3 - 1];
for (const key in numbers) {
  console.log(key); // 0, 1, 2
}

for (const value of numbers) {
  console.log(value); // 1, 2.1, 2
}

numbers.push(2809);

for (const value of numbers) {
  console.log(value); // 1, 2.1, 2, 2809
}