let firstName: string = "Sergei";
let lastName: string = "Kamianetskii";
let sleeping: boolean = true;
let age: number = 32;

let fullName: string = `${firstName} ${lastName}`;
console.log("Full name: " + fullName);

/*
// Type 'number' is not assignable to type 'string'.
let foo = 'string';
foo = 12345;
*/

//#region any
let foo: any = 'string';
console.log(typeof (foo));

foo = 12345;
console.log(typeof (foo));

//#endregion

let value = 0;

const getValue = () => {
  let sign = Math.random() - 0.5;
  return sign > 0 ? sign : undefined;
}

/*
// Type 'number | undefined' is not assignable to type 'number'.
value = getValue();
console.log(value);
*/

//#region type-function

function getValueTypeFunction(): number | undefined {
  let random = Math.random() - 0.5;
  return random > 0 ? random : undefined;
}

let typeValue: number | undefined = getValueTypeFunction();
console.log(typeValue);

//#endregion