import React from "react";
import Image from "next/image";

const Button = ({ color, text, textColor, image, className,width, type, onClick}) => {
  return (
      <button
      type={type}
      onClick={onClick}
        className={`bg-[#4299A6] text-[#fff] rounded-full w-80 h-12 border m-2  flex justify-center pt-3 ${className}`}
        style={{ backgroundColor: color, color: textColor,width: width }}

      >
        {image && <Image  src={image} width={50} height={50} alt="Image" className="h-5 pr-4" />}
        <p className={`text-extrabold ${className}`}> {text}</p>
      </button>
  );
};
export default Button;
