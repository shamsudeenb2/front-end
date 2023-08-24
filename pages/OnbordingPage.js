"use client";
import React, { useEffect, useState } from "react";
import NabBtn from "@/components/button_image";
import OnborBtn from "@/components/onborBtn";
import Link from "next/link";
import DeskBtn from "@/components/deskBtn";


const OnBordingPage = () => {
    const images = [
      {
        id: 1,
        imageUrl: "image.png",
        text: "Doctor’s Appointment Reminder",
        pag: "Setting reminder for your doctor’s appointment  ",
        bgImage: "bgImage1.png",
      },
      {
        id: 2,
        imageUrl: "image2.png",
        text: "Medication Intake and Refill Reminder",
        pag: "Setting reminder for your intake of your drugs and refill of your drugs",
        bgImage: "bgImage2.png",
      },
      {
        id: 3,
        imageUrl: "image3.png",
        text: "Medical Records",
        pag: "Check and evaluate your past medical records",
        bgImage: "bgImage3.png",
      },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
          );
        }, 5000);
    
        return () => {
          clearInterval(timer);
        };
      }, [images.length]);

      const handleToggleModal = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
      };

    return(
      <>

      <div className="md:hidden">
        <img
          className="slider-image w-full h-full object-cover mt-9"
          src={images[currentSlide].imageUrl}
          alt="Slider Image"
        />
        <div className="mx-10 my-3">
          <h3 className="slider-text font-bold text-center text-black text-2xl">
            {images[currentSlide].text}
          </h3>
          <p className="text-center py-3 text-xl">{images[currentSlide].pag}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          className="slider-image w-full  object-cover "
          src={images[currentSlide].bgImage}
          alt="Slider Image"
        />
        <div className="flex justify-around my-5">
          <OnborBtn text="Doctor’s Appointment Reminder" />
          <OnborBtn text="Medication Intake and Refill reminder" color="#000" />
          <OnborBtn text="Medical Record" />
        </div>
      </div>
      {/* <div
        className=" absolute top-4 right-4 text-2xl cursor-pointer md:hidden"
        onClick={handleToggleModal}
      >
        <img src="hamburger.png" className="" />
      </div> */}
    </>
    )
}

export default OnBordingPage;