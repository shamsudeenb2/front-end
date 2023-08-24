import React from "react";

// import Link from "next/link";

const CalenderButton = ({ color, text, textColor, date, className }) => {
  return (
    <button
      className={`rounded-xl w-11 h-16 border m-1 py-2 ${className}`}
      style={{ backgroundColor: color, color: textColor }}
    >
      <p className={` text-sm ${className}`}> {text}</p>
      <p className={`font-bold`}>{date}</p>
    </button>
  );
};
export default CalenderButton;
