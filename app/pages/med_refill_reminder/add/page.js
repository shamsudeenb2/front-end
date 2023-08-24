import React from "react";
// import MedRefillReminderInput from "@/components/med_refill_reminder";
// import Navigation from "@/components/hamburgerMain";
// import MenuBar from "@/components/menuBar";
// import MedRefillReminderInput from "@/components/med_refill_reminder";
// import HamburgerMain from "@/components/hamburgerMain";
import MedRefillInput from "@/pages/MedRefillInput"
import Link from "next/link";

const MedReminder = () => {
  return (
    <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg inset-0 m-auto flex flex-col mt-3">
      {/* <HamburgerMain /> */}
      <Link href="list/">
         <svg className="mx-2 mt-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M9.56995 18.0698L3.49995 11.9998L9.56995 5.92982" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
           <path d="M20.5 12L3.67 12" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <h1 className=" text-center font-extrabold text-lg">Reminder</h1>
      <div className="my-5 mx-4 flex flex-col items-center justify-center">
        <MedRefillInput />
      </div>
  </div>
  );
};

export default MedReminder;
