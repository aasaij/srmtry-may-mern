import express from "express";
// const express = require("express");

import path from "path";
// const path = require("path");

import { fileURLToPath } from "url";
// const { fileURLToPath } = require("url");

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const hostName = "localhost";
const port = 3000;

const indexFileName = path.join(__dirname, "pages", "index.html");
const aboutFileName = path.join(__dirname, "pages", "about.html");
const registrationForm = path.join(__dirname, "view", "registration.html");

const app = express();
//handling form data
//middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).sendFile(indexFileName);
});
app.get("/about", (req, res) => {
  res.status(200).sendFile(aboutFileName);
});
app.get("/registration", (req, res) => {
  res.status(200).sendFile(registrationForm);
});

app.get("/home", (req, res) => {
  res.status(301).redirect("/");
});
app.post("/submit", (req, res) => {
  //   const employee = req.body;
  //   console.log(employee.firstName);
  //   console.log(employee.lastName);
  //   console.log(employee.phoneNumber);
  const { firstName, lastName, phoneNumber } = req.body;
  const thankFile = path.join(__dirname, "view", "thank.html");
  //   res.status(200).sendFile(thankFile);
  res
    .status(200)
    .send(
      `<h1>Form submitted successfully by ${firstName + " " + lastName} </h1>`
    );
});
app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
