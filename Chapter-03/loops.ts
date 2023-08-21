let i = 3;
while (i-- > 0) {
  console.log("while", i);
}

console.clear();

i = 3;
do {
  console.log("do-while", i);
}
while (i-- > 0);

console.clear();

for (let k = 0; k < 3; k++) {
  console.log("for", k);
}

// for (let item in|of items) {
// }