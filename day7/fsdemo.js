import fs from "fs";
import path from "path";
// fs.readFile("./data.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// let content = "Nithish is a good boy.\nHe is very smart.";

// fs.writeFile("./data.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created successfully.");
//   }
// });
// let content = "Manu is friend of Nithish.\nNithish is friend of Manu.";

// fs.appendFile("./data.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File updated successfully.");
//   }
// });

console.log(path.dirname("./data.txt"));
console.log(path.basename("./data.txt"));
console.log(path.extname("./data.txt"));
