// function definition

// function calling
// greet();
// greet(null);
// greet("Preethi");
// greet("Amarnath", "M");

// function greet(userName, gender) {
//   //   console.log("Good Morning Engineers!");
//   //   if (userName === undefined || userName === null) {
//   //     userName = "Engineers";
//   //   }
//   let title = gender || "Ms. ";
//   if (gender === "M" || gender === "m") {
//     title = "Mr. ";
//   } else if (gender === "F" || gender === "f") {
//     title = "Ms. ";
//   }
//   userName = userName || "Engineers";
//   //   console.log("Good Morning " + userName);
//   console.log(`Good Morning "${title}${userName}"`);
// }

// let greet = function (userName, gender) {
//   //   console.log("Good Morning Engineers!");
//   //   if (userName === undefined || userName === null) {
//   //     userName = "Engineers";
//   //   }
//   let title = gender || "Ms. ";
//   if (gender === "M" || gender === "m") {
//     title = "Mr. ";
//   } else if (gender === "F" || gender === "f") {
//     title = "Ms. ";
//   }
//   userName = userName || "Engineers";
//   //   console.log("Good Morning " + userName);
//   console.log(`Good Morning "${title}${userName}"`);
// };

// greet();
// greet(null);
// greet("Harita");
// greet("Deshikhraaj", "M");

// let greet = function (userName) {
//   console.log("Good Morning " + userName);
// };

// let greetAll = function (names) {
//   //   for (let index = 0; index < names.length; index++) {
//   //     greet(names[index]);
//   //   }
//   // for (let name of names) {
//   //     greet(name);
//   // }
//   // for (let index in names) {
//   //     greet(names[index]);
//   // }
// };

// let names = [
//   "Harita",
//   "Deshikhraaj",
//   "Preethi",
//   "Sneha",
//   "Niranthara",
//   "Kamalavarshini",
//   "Amarnath",
//   "Bharath",
// ];

// greetAll(names);

// function sum(n1, n2, ...list) {
//   if (n1 === undefined || n2 === undefined) {
//     return "List should have atleast two elements";
//   }
//   let total = n1 + n2;
//   for (let index = 0; index < list.length; index++) {
//     total = total + list[index];
//   }
//   return total;
// }

// let list = [1, 2, 3, 4, 5];
// // let list = [10, 20];
// console.log(sum(...list));

// let add = (a, b) => {
//   console.log("This is an arrow function");
//   return a + b;
// };
// let greet = () => {
//   return "Good Morning Engineers!";
// };
// let add = (a, b) => a + b;
// // let greet = () => "Good Morning Engineers!";
// let greet = (userName) => `Good Morning ${userName}`;

// console.log(add(10, 20));
// console.log(greet());

// let person = {
//   firstName: "Preethi",
//   lastName: "S",
//   gender: "F",
//   fullName: function () {
//     if (this.gender === "F" || this.gender === "f") {
//       return `Ms. ${this.firstName} ${this.lastName}`;
//     } else {
//       return `Mr. ${this.firstName} ${this.lastName}`;
//     }
//   },
// };

// let person = {
//   firstName: "Preethi",
//   lastName: "S",
//   gender: "F",
//   fullName: () => {
//     if (this.gender === "F" || this.gender === "f") {
//       return `Ms. ${this.firstName} ${this.lastName}`;
//     } else {
//       return `Mr. ${this.firstName} ${this.lastName}`;
//     }
//   },
// };

// console.log(person.fullName());
let names = [
  "Harita",
  "Deshikhraaj",
  "Preethi",
  "Sneha",
  "Niranthara",
  "Kamalavarshini",
  "Amarnath",
  "Bharath",
];

function display(name) {
  console.log(name);
}
// console.log(display);
// let greet = display;
// console.log(greet("Testing"));
// console.log(display("Testing1"));

// names.forEach(display);
// names.forEach(function (name) {
//   console.log(name.toUpperCase());
// });

// names.forEach(name => console.log(name.toUpperCase()));

// Array methods
// let list = [1, 2, 3, 4, 5];
// let obj1 = { name: "Preethi" };
// console.log(typeof list);
// console.log(typeof obj1);
// console.log(Array.isArray(list));
// console.log(Array.isArray(obj1));
// let arr1 = Array.of(1, 2, 3, 4, 5);

// arr1.push(100);
// arr1.unshift(200);
// arr1.splice(2, 0, 300); // insert 300 at 2nd index
// arr1.splice(2, 3); // remove 3 elements starting from 2nd index
// arr1.splice(2, 3, 300, 400, 500);
// console.log(arr1);

// console.log(arr1.pop());
// console.log(arr1);
// console.log(arr1.shift());
// console.log(arr1);

// console.log(arr1.includes(100));
// console.log(arr1.includes(5));
// console.log(arr1.indexOf(100));
// console.log(arr1.lastIndexOf(100));
// console.log(arr1.slice(1, 4));
// console.log(arr1.slice(0, -1));

let arr1 = [1, 2, 3, 4, 5];
// let date = new Date();

// arr1 = arr1.map((data) => (data % 2 == 0 ? data * data : data));
//   .forEach((data) => console.log(data));

// console.log(arr1);
// console.log(arr1.slice());
console.log(arr1.reduce((x, y) => x + y));
