import CalenderButton from "components/calender_button.js";
import ReminderButton from "components/reminder_button.js";
import NabBtn from "@/components/button_image";
import Button from "@/components/button";
import Navigation from "@/components/hamburgerMain";
// import Home from "@/pages/HomePage";
import Link from "next/link";
import MenuBar from "@/components/menuBar";
import BottomImg from "@/components/svg_image";
import Home from "@/pages/HomePageComponent";


export default function HomePage() {
  return (
    // <div className="h-screen ">
    //   <div className="flex justify-between ">
    //    </div> 
    // <div className="flex w-full">
      <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg  m-auto items-center justify-center">
        <Home />
      </div>
    // </div>
    // </div>
  );
}
