import { Audi } from "./audi";
import { Car } from "./car";

const car: Car = new Car("bmw", "x3");
// Property 'getInfo' does not exist on type 'Car'.
// console.log(car.getInfo());

const audiA5: Audi = new Audi("audi", "A5");
console.log(audiA5.getInfo());