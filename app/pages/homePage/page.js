import CalenderButton from "components/calender_button.js";
import ReminderButton from "components/reminder_button.js";
import NabBtn from "@/components/button_image";
import Button from "@/components/button";
import Spinner from "@/components/common/Spinner";
import Navigation from "@/components/hamburgerMain";
// import Home from "@/pages/HomePage";
import Link from "next/link";
import MenuBar from "@/components/menuBar";
import BottomImg from "@/components/svg_image";
import dynamic from "next/dynamic";
import Home from "@/components/pages/HomePageComponent"
const DynamicHome = dynamic(()=> import("@/components/pages/HomePageComponent"),{
  loading: ()=> <><Spinner/></>
})

export default function HomePage() {
  return (
    // <div className="h-screen ">
    //   <div className="flex justify-between ">
    //    </div> 
    // <div className="flex w-full">
      <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg  m-auto items-center justify-center">
        <DynamicHome />
      </div>
    // </div>
    // </div>
  );
}
