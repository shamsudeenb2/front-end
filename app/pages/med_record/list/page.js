import React from "react";
import ListOf from "@/components/listOf";
import Link from "next/link";
import Image from "next/image";
import Plus_btn from "@/components/plus_btn";
import BottomImg from "@/components/svg_image"
import Record from "@/components/pages/RecordListComponent"
import Spinner from "@/components/common/Spinner";
import dynamic from "next/dynamic";

const DynamicRecList = dynamic(()=> import("@/components/pages/RecordListComponent"),{
  loading: ()=> <><Spinner/></>
})

const ListReminder = () => {
  
  return (
    <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg  m-auto items-center justify-center">
    <div>
      <div className="flex justify-center mt-5">
        <h1 className="mx-2 font-extrabold text-lx">Meddical Record</h1>
      </div>
      <div className="my-5 mx-4 flex">
        <Plus_btn to="add/" text="Add Med Intake Reminder" />
      </div>
          <DynamicRecList/>
      </div>
    </div>
  );
};

export default ListReminder;
