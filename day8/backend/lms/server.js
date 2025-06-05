import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
const host = "localhost";
const PORT = process.env.PORT || 9000;

// const User = require("./models/User");
//creating server
const app = express();
//connecting the database
mongoose
  .connect("mongodb://localhost:27017/lms")
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

// middleware - to parse json
app.use(express.json());

//routing the request to addUser
app.post("/addUser", (req, res) => {
  //Object destructuring the user input
  const { _id, name, email, password, role, profileImage, bio } = req.body;

  const user = new User({
    _id,
    name,
    email,
    password,
    role,
    profileImage,
    bio,
  });
  user
    .save() // saving the user
    .then((user) => {
      //if successfull return the user
      res.json(user);
    })
    .catch((err) => {
      //if failed return the error
      console.log(err);
    });
});
app.get("/getUsers", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  //   User.findById(id)
  User.findOne({ _id: id })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete({ _id: id })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, password, role, profileImage, bio, entrolledCourses } =
    req.body;
  User.findOneAndUpdate(
    { _id: id },
    { name, email, password, role, profileImage, bio, entrolledCourses }
  )
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://${host}:${PORT}`);
});
