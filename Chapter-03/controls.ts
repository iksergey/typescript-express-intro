const str1: string | undefined = undefined;

if (!str1) {
  console.log("+");
} else {
  console.log("-");
}

const str2: string = "";
console.log(!str1 ? "+" : "-");

// const str3: string = "foo";
// const str3 = "foo";
// let str3: string = "foo";
let str3 = "foo";
let out: string;
switch (str3) {
  case "": out = "empty"
    break;
  case "foo": out = "str3 = foo";
    break;
  default:
    out = "default";
    break;
}
console.log(out);
