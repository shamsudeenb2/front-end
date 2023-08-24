import React from "react";
import ListOf from "@/components/listOf";
import Link from "next/link";
import Image from "next/image";
import BottomImg from "@/components/svg_image";
import Plus_btn from "@/components/plus_btn";
import Navigation from "@/components/hamburgerMain";
import MenuBar from "@/components/menuBar";

const ListAppointment = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="inset-0  flex flex-col bg-no-repeat bg-center bg-doc_bg_img w-full">
        <MenuBar text="Doctor Appointments" />
        <div className="my-5 mx-4 flex ">
          <Plus_btn to="" text="Add Doctor Appointment" />
        </div>
        <div className="w-90 md:w-8/12 mx-4 my-4 bg-[#dadfeff0] rounded-3xl p-2">
          <ListOf
            doc_name="Dr. Marcus Horizon"
            reminder_type="Date"
            date="Friday, Jun 25, 2023 | 10:00 AM"
            to="pages/signup"
          />
        </div>
        <BottomImg />
      </div>
    </div>
  );
};

export default ListAppointment;
