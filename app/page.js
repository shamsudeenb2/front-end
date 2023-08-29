import React from "react";
import OnBordingPage from "@/components/pages/OnbordingPage";
import Setup from "@/components/utils/setup";
import Provider from "@/redux/proviider";
import Navbar from "@/components/common/Navbar";

export default function Slider(){
  return (
    <div className="slider-container relative w-500 h-300 overflow-hidden">
      <OnBordingPage/>
    </div>
  );
};


