import mongoose from "mongoose";

mongodb: mongoose
  .connect("mongodb://127.0.0.1:27017/studenttest")
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });
