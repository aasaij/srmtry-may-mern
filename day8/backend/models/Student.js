import mongoose from "mongoose";

const Employee = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  depart: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("employee", Employee);
