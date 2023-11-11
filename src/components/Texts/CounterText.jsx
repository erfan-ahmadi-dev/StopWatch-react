import React from "react";

function CounterText({ minutes, second, milisecond }) {
  return (
    <div className="font-bold text-[4.5rem]">
      <span>{minutes} </span>
      <span>: </span>
      <span>{second} </span>
      <span>: </span>
      <span>{milisecond}</span>
    </div>
  );
}

export default CounterText;
