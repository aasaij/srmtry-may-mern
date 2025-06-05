import express from "express";

const app = express();
const hostName = "localhost";
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Good Morning to Everyone!</h1><h2>Thank you so much for being very attentive!</h2>"
  );
});

app.get("/about", (req, res) => {
  res.send("<h1>About US</h1>");
});

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
