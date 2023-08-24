"use client";
import React, { useEffect, useState } from "react";
import NabBtn from "@/components/button_image";
import Image from "next/image";
import Link from "next/link";
import  Spinner  from '@/components/common/Spinner';
import ReminderButton from "components/reminder_button.js";
import { useRetrieveDoctorQuery,useRetrieveRefillQuery, useRetrieveMedicationQuery, } from '@/redux/features/authApiSlice';

const Navigation = () => {
  const {data: doctors, isLoading: loadingA, isFetching:fetchingA} = useRetrieveDoctorQuery();
  const {data: refills, isLoading: loadingR, isFetching: fetchingR} = useRetrieveRefillQuery();
  const {data: medication, isLoading: loadingM, isFetching: fetchingM} = useRetrieveMedicationQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsModalOpen(false);
    }
  }, []);
  const handleOverlayClick = (event) => {
    // Close the modal when clicking on the overlay background
    if (event.target.classList.contains("overlay-container")) {
      setIsModalOpen(false);
    }
  };
  return (
    <div className="w-4/12 h-full m-0 bg-[#95CBD3]">
      <div className="md:hidden m-6">
        {/* <Image
          src="/Menu.png"
          width={50}
          height={50}
          alt="background"
          priority={true}
          onClick={handleToggleModal}
          className=" "
        /> */}
      </div>
      {/* {isModalOpen && (
        <div className="absolute left-0 top-12 bg-[#95CBD3] rounded-lg pb-7 w-8/12 z-20">
          <div className="modal-content">
            <Image
              src="/MedAidlogo.png"
              width={100}
              height={100}
              alt="background"
              className="flex m-auto "
            />
            <div className="border border-[#00000073] mx-2"></div>
            <Link href="/appointment/list">
              <NabBtn
                to="../pages/med_reminder/add"
                text="Doctor’s Appointment"
                className="w-11/12 bg-[#fff] text-[red]"
              />
            </Link>

            <div className="border border-[#00000073] mx-2 my-4"></div>
            <Link href="appointment/list">
              <NabBtn
                text="Med Reminder"
                to="../pages/med_reminder/add"
                className="w-11/12 bg-[#fff] text-[#000]"
              />
            </Link>
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
          <Link href="../pages/signin">
            <button
              className={`bg-[#4299A6] text-[#fff] rounded-full h-12 border w-48 m-auto flex justify-center pt-3 `}
            >
              <p className={`text-extrabold `}>Logout</p>
            </button>
          </Link>
        </div>
      )} */}
      <div className=" bg-[#95CBD3] w-full h-full hidden rounded-lg md:block">
        <div className="content">
          <Image
            src="/MedAidlogo.png"
            width={100}
            height={100}
            alt="background"
            className="flex m-auto "
          />
          <div className="border border-[#00000073] mx-2"></div>
          <div>
            {loadingA?(
              <div className='flex justify-center my-8'>
                 <Spinner sm />
              </div>
            ):(
              <ReminderButton
              reminder_type= "Doctor Appointment"
              doc_name={doctors[0].name}
              date={`${doctors[0].reminder_date} | ${doctors[0].reminder_time}`}
              to="pages/ap"
              className="w-11/12 bg-[#fff] text-[red]"
            />
            )}
          </div>

          <div className="border border-[#00000073] mx-2 my-4"></div>
          <Link href="appointment/list">
            <NabBtn
              text="Med Reminder"
              to="../pages/med_reminder/add"
              className="w-11/12 bg-[#fff] text-[#000]"
            />
          </Link>
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
          <Link href="../pages/signin">
            <button
              className={`bg-[#fff] text-[#000] rounded-full h-12 border w-48 m-auto flex justify-center pt-3 `}
            >
              <p className={`text-extrabold `}>Logout</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
