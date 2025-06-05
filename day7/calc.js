// import { add, sub, mul, div } from "./mymodule.js";
// console.log(add(10, 20));
// console.log(sub(10, 20));
// console.log(mul(10, 20));
// console.log(div(10, 20));

// const calculator = require("./mymodule.js");
// console.log(calculator.add(10, 20));
// console.log(calculator.sub(10, 20));
// console.log(calculator.mul(10, 20));
// console.log(calculator.div(10, 20));

// const { add, sub, mul, div } = require("./mymodule.js");
const calculator = require("./mymodule.js");
const addition = calculator.add;
const subtract = calculator.sub;
const multiply = calculator.mul;
const divide = calculator.div;
console.log(addition(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));
