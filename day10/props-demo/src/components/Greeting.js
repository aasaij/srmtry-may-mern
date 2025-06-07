import React from "react";
import Student from "./Student";
// const Greeting = (props) => {
const Greeting = ({ name, gender, sname, sgender, score }) => {
  return (
    <div>
      <h1>
        {/* Good Morning {props.gender === "female" ? "Miss. " : "Mr. "}
        {props.name}! */}
        Good Morning {gender === "female" ? "Miss. " : "Mr. "} {name}{" "}
      </h1>
      <Student sname={sname} sgender={sgender} score={score} />
    </div>
  );
};

export default Greeting;
