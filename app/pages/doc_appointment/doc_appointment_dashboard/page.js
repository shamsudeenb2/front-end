"use client";
import React, { useEffect, useState } from "react";
import CalenderButton from "components/calender_button.js";
import ReminderButton from "components/reminder_button.js";
import NabBtn from "@/components/button_image";
import Button from "@/components/button";
import Plus_btn from "@/components/plus_btn";

export default function Doc_appointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <div className="max-w-3xl m-auto relative items-center justify-center">
      {isModalOpen && (
        <div className="z-50 absolute right-0 top-5 bg-[#95CBD3] rounded-lg pb-7 w-8/12">
          <div className="modal-content">
            <img src="../../MedAidlogo.png" className="flex m-auto" />
            <div className="border border-[#00000073] mx-2"></div>
            <NabBtn
              text="Doctor’s Appointment"
              to="../pages/doc_appointment"
              className="w-11/12 bg-[#fff] text-[red]"
            />
            <div className="border border-[#00000073] mx-2 my-4"></div>
            <NabBtn
              text="Med Reminder"
              to="pages/signup"
              className="w-11/12 bg-[#fff] text-[#000]"
            />
            <div className="border border-[#00000073] mx-2 my-4"></div>
            <NabBtn
              text="Med Refill Reminder"
              to="pages/signup"
              className="w-11/12 bg-[#fff] text-[#000]"
            />
            <div className="border border-[#00000073] mx-2 my-4"></div>
            <NabBtn
              text="Medical Records"
              to="pages/signup"
              className="w-11/12 bg-[#fff] text-[#000]"
            />
            <div className="border border-[#00000073] mx-2 my-5"></div>
          </div>
          <Button text="Logout" to="" className="w-36 m-auto" />
        </div>
      )}
      <div className="flex justify-between m-4">
        <div>
          <h1 className="text-xl font-bold">Doctor Appointment</h1>
        </div>
        <div className="flex justify-between">
          <img
            className="w- h-3/5 m- flex justify-center"
            onClick={handleToggleModal}
            src="../../Menu.png"
          />
        </div>
      </div>
      <div className="flex">
        <Plus_btn to="doc_appointment_addNew" />
        <p className="text-lg">Add Doctor Appointment</p>
      </div>

      <div className="flex flex-col items-center my-2 -z-4">
        <ReminderButton
          reminder_type="Dr. Marcus Horizon"
          doc_name=""
          date="Friday, Jun 25, 2023 | 10:00 AM"
          to="pages/signup"
        />
      </div>
      <div className=" bottom-[0] right-0 fixed -z-4 ">
        <img src="../../obj2.png"></img>
      </div>
    </div>
  );
}
