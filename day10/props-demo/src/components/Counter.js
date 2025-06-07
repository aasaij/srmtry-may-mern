import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const Counter = () => {
  let [count, setCount] = useState(0);
  const labelStyle = {
    color: "red",
    fontSize: "1.5em",
  };
  //event handlers
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={handleIncrement}>
        +
      </button>
      <br />
      <label style={labelStyle}>{count}</label>
      <br />
      <button className="btn btn-primary" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
