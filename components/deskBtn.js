import React from "react";
import Link from "next/link";

const DeskBtn = ({ color, text, textColor, to, className }) => {
  return (
    <Link href={to}>
      <button
        className={` rounded-lg w-30 h-10 m-2 flex justify-between px-2 ${className}`}
        style={{ backgroundColor: color, color: textColor }}
      >
        <p className="text-[#fff] my-auto text-lg"> {text}</p>
      </button>
    </Link>
  );
};

export default DeskBtn;
