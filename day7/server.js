import http from "http";
import fs from "fs";
let hostName = "10.15.16.30";
let port = 3000;

const server = http.createServer((req, res) => {
  let path = req.url;
  console.log(path);
  if (path == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./index.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (path === "/employees") {
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("./404.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  }
  //   res.write("<h1>Good Afternoon Engineers!</h1>");
  //   res.write("<h2>Thank you for being very interactive</h2>");
});

server.listen(port, () => {
  console.log("Server is running at http://" + hostName + ":" + port);
});
