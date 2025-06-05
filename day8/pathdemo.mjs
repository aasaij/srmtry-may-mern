import path from "path";
// import { getGlobals } from "common-es";
// const { __dirname, __filename } = getGlobals(import.meta.url);
import { fileURLToPath } from "url";
// const path = require("path");
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const fileName = path.join(__dirname, "pages", "index.html");

console.log(fileName);
console.log(__dirname);
console.log(__filename);
