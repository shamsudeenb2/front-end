import React from "react";
import Image from "next/image";

const MenuBar = ({ text }) => {
  return (
    <div className="flex justify-between m-2 p-5 rounded-lg bg-[#95CBD3] ">
      <div>
        <h2 className="font-bold text-3xl">{text}</h2>
      </div>
      <div className="flex justify-between">
        <Image
          src="/icon _notification.png"
          width={30}
          height={10}
          alt="background"
          className="flex m-auto pr-2"
        />

        <div className=" mx-3">
          <Image
            src="/profile.png"
            width={40}
            height={10}
            alt="background"
            className="flex m-auto"
          />
          <label>Profile</label>
        </div>
      </div>
    </div>
  );
};
export default MenuBar;
