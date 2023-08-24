import React from "react";

const OnborBtn = ({
  color,
  text,
  textColor,
  className,
  width,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#4299A6] text-[#fff] rounded-lg w-80 h-20 border m-2  flex justify-center  ${className}`}
      style={{ backgroundColor: color, color: textColor, width: width }}
    >
      <p className={`text-extrabold  my-auto ${className}`}>{text}</p>
    </button>
  );
};
export default OnborBtn;
