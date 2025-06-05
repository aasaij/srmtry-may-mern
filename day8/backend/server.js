import express from "express";
import mongoose from "mongoose";
import Employee from "./models/Student.js";
const hostName = "localhost";
const PORT = 9000;

const app = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/srmtry")
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.post("/addEmployee", (req, res) => {
  const employee = new Employee({
    id: req.body.id,
    name: req.body.name,
    salary: req.body.salary,
    gender: req.body.gender,
    depart: req.body.depart,
  });
  employee
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});
