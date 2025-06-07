import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StudetList() {
  const students = [
    { rollno: 1, name: "Sridevi", score: 10 },
    { rollno: 2, name: "Helda", score: 10 },
    { rollno: 3, name: "Ravi", score: 10 },
    { rollno: 4, name: "Sai", score: 10 },
  ];
  return (
    <div className="container">
      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-info">
          {students.map((student) => (
            <tr key={student.rollno}>
              <td>{student.rollno}</td>
              <td>{student.name.toUpperCase()}</td>
              <td>{student.score}</td>
              <td>
                <button className="btn btn-primary">Update</button>{" "}
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
