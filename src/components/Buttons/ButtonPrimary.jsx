import React from "react";

function ButtonPrimary({ text, func, color }) {
  return (
    <button
      onClick={func}
      className={`${color} rounded-3xl px-10 py-2  font-bold `}
    >
      {text}{" "}
    </button>
  );
}

export default ButtonPrimary;
