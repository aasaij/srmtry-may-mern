import React from "react";

const Student = ({ sname, sgender, score }) => {
  return (
    <>
      <h2>Name : {sname}</h2>
      <h2>Gender : {sgender}</h2>
      <h2>Score : {score}</h2>
    </>
  );
};

export default Student;
