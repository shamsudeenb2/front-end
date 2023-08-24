import React from "react";
import AppointInput from "@/pages/AppointInput";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/hamburgerMain";
import MenuBar from "@/components/menuBar";
// import Home from "../app/page";

const AddAppointment = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full">
        <MenuBar text=" Doctor Appointments" />
        <div className=" inset-0 m-auto flex flex-col mt-3 ">
          {/* <svg
            className="mx-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.56995 18.0698L3.49995 11.9998L9.56995 5.92982"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5 12L3.67 12"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          {/* <h1 className=" text-center font-extrabold text-lg">
            Doctor Appointments
          </h1> */}
          <div className=" flex flex-col items-center justify-center ml-10">
            <AppointInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
