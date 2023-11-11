import React from "react";

function LabItem({ firstText, seconText }) {
  return (
    <div className="flex justify-between w-full text-start">
      <span className="w-1/2">{firstText}</span>
      <span className="w-1/2">{seconText}</span>
    </div>
  );
}

export default LabItem;
