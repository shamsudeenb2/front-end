import React from "react";
import Link from "next/link";
import Image from "next/image";

const Plus_btn = ({ to, text, className }) => {
  return (
    <Link href={to}>
      <button className={`flex text-xl ${className}`}>
        <Image
          src="/plus_btn.png"
          width={35}
          height={10}
          alt="background"
          priority={true}
        />
        <p className="px-5  font-normal"> {text}</p>
      </button>
    </Link>
  );
};
export default Plus_btn;
