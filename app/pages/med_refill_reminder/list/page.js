import React from "react";
import Link from "next/link";
import Button from "@/components/button";
import RefillComponent from "@/components/pages/MedRefillListComponent";
import Plus_btn from "@/components/plus_btn";
import BottomImg from "@/components/svg_image";
import Navigation from "@/components/hamburgerMain";
import MenuBar from "@/components/menuBar";
import Spinner from "@/components/common/Spinner";
import dynamic from "next/dynamic";

const DynamicRefilList = dynamic(()=> import("@/components/pages/MedRefillListComponent"),{
  loading: ()=> <><Spinner/></>
})

export default function MedRefill() {
  return (
    <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg   m-auto items-center justify-center">
      <div>
        <div className="flex justify-center mt-5">
          <h1 className="mx-2 font-bold text-xl">Med Refill Reminder</h1>
        </div>
        <div className="my-5 mx-4 flex ">
          <Plus_btn to="add/" text="Med Refill Reminder" />
        </div>
          <DynamicRefilList/>
      </div>
    </div>
  );
}

