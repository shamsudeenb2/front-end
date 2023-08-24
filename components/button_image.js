import React from "react";
import Link from "next/link";
import Image from "next/image";

const NabBtn = ({ color, text, textColor, to, image, className }) => {
  return (
    <Link href={to}>
      <button
        className={`bg-[#4299A6] text-[#fff] rounded-lg w-30 h-12 border m-2  flex justify-between px-3 ${className}`}
        style={{ backgroundColor: color, color: textColor }}
      >
        <p className="text-[#000] text-extrabold my-auto"> {text}</p>
        <Image
          src="/icon_arrowSquare.png"
          width={25}
          height={25}
          alt="icon arrow"
          priority={true}
          className="my-auto"
        />
      </button>
    </Link>
  );
};

export default NabBtn;
