
const add = (x, y) => { return x + y; };
const sub = (x, y) => { return x - y; };
const mul = (x, y) => { return x * y; };
const div = (x, y) => { if (y != 0) { return x / y; } else { return "impossibile" } };

let a = 5;
let b = 3;

console.log(add(a, b));
console.log(sub(a, b));
console.log(mul(a, b));
console.log(div(a, b));
