"use client";
import React, { useEffect, useState } from "react";
import CalenderButton from "components/calender_button.js";
import ReminderButton from "components/reminder_button.js";
import  Spinner  from '@/components/common/Spinner';
import DeleteItem from "@/components/DeleteComponent";
// import NabBtn from "@/components/button_image";
// import Button from "@/components/button";
// import HamburgerMain from "@/components/hamburgerMain";
// import {useAppDispatch, useAppSelector} from "@/redux/hooks"
// import { setUser, setError } from '@/redux/features/authSlice';
// // import { useEffect } from 'react';
// import { fetchDataFromEndpoints } from '@/redux/features/fetchUser'
import { useRouter } from "next/dist/client/router";
import { useRetrieveHomeViewQuery,useRetrieveDoctorQuery,useRetrieveRefillQuery, useRetrieveMedicationQuery,  } from '@/redux/features/authApiSlice';




export default function Home(){
  const {data: doctors, isLoading: loadingA, isFetching:fetchingA} = useRetrieveDoctorQuery();
  const {data: refills, isLoading: loadingR, isFetching: fetchingR} = useRetrieveRefillQuery();
  const {data: medication, isLoading: loadingM, isFetching: fetchingM} = useRetrieveMedicationQuery();
  // const { concatenatedData, isLoading, error } = useAppSelector((state) => state.data);
    // const dispatch = useAppDispatch();
    const {data: homes, isLoading, isFetching} = useRetrieveHomeViewQuery();
    // const {data: user, isSuccess} = useRetrieveUserQuery();
    const [showModal, setShowModal] = useState(false);
   
    if (isLoading || isFetching) {
      return (
        <div className='flex justify-center my-8'>
          <Spinner lg />
        </div>
      );
    }



    
    // const { data, isLoading, error } = useSelector((state) => state.data);
      // console.log('after despatch', data)
      const handleShow =(id)=>{
        setShowModal(true)
        console.log(id)
      }
      const handleClose =()=>{
        setShowModal(false)
      }
      
    return (
        <>
          <div className="w-21 text-center mt-10">
            <CalenderButton text="Mon" date="21" className="text-[#A1A8B0]" />
            <CalenderButton text="Tue" date="22" className="text-[#A1A8B0]" />
            <CalenderButton
              text="Wed"
              date="23"
              className="bg-[#4299A6] text-[#fff] "
            />
            <CalenderButton text="Thu" date="24" className="text-[#A1A8B0]" />
            <CalenderButton
              text="Fri"
              date="25"
              className="bg-[#A64242] text-[#fff]"
            />
            <CalenderButton text="Sat" date="26" className="text-[#A1A8B0]" />
            <CalenderButton text="Sun" date="27" className="text-[#A1A8B0]" />
          </div>

      <hr className="mt-4 mx-5" />

      <div className="max-w-2xl min-h-screen m-auto mt-8 items-center justify-center">
        {/* <>
        {homes?.map((home, i)=>(
          <div key={home.id}>
             <ReminderButton
              key={home.id}
              reminder_type={i == 0?"Doctor Appointment": i==1?"Medication Reminder": "Refill Reminder"}
              doc_name={home?.name?home?.name:home?.medics_id?.name}
              date={`${home.reminder_date} | ${home.reminder_time}`}
              to="auth/signup"
              className="bg-gradient-to-b from-[#D9D9D9] to-[#9EDAE3] w-80"/>
          </div>
        ))}

        </> */}
        <div className="md:flex md:flex-wrap"> 
         <div className=" md:basis-1/2" >
            {loadingM?(
              <div className='flex justify-center my-8'>
                 <Spinner sm />
              </div>
            ):medication[0]?(
              <ReminderButton
              reminder_type= "Medication Reminder"
              doc_name={medication[0]?.medics.name}
              dosage_name={`Dosage   x${medication[0]?.medics.medicine_qty}`}
              date={`${medication[0]?.medics.reminder_date} | ${medication[0]?.reminder_time}`}
              to="pages/ap"
              // className="bg-gradient-to-b from-[#D9D9D9] to-[#9EDAE3] w-80"
              onClick={handleShow}
              id={medication[0].id}
              page="Home"
            />
            ):(
              <></>
            )}
          </div>
          <div className=" md:basis-1/2 ">
            {loadingR?(
              <div className='flex justify-center my-8'>
                 <Spinner sm />
              </div>
            ):refills[0]?(
              <ReminderButton
              reminder_type= "Refill Reminder"
              doc_name={refills[0]?.medics.name}
              date={`${refills[0]?.reminder_date} | ${refills[0]?.reminder_time}`}
              to="pages/ap"
              // className="bg-gradient-to-b from-[#D9D9D9] to-[#9EDAE3] w-80"
              onClick={handleShow}
              id={refills[0].id}
              page="Home"
            />
            ):(
              <></>
            )}
          </div>
          <div className=" md:basis-1/2 ">
            {loadingA?(
              <div className='flex justify-center my-8'>
                 <Spinner sm />
              </div>
            ):doctors[0]?(
              <ReminderButton
              reminder_type= "Doctor Appointment"
              doc_name={doctors[0]?.name}
              date={`${doctors[0]?.reminder_date} | ${doctors[0]?.reminder_time}`}
              to="pages/ap"
              // className="bg-gradient-to-b from-[#D9D9D9] to-[#9EDAE3] w-80"
              onClick={handleShow}
              id={doctors[0].id}
              page="Home"
              
            />
            ):(
              <></>
            )}
          </div>
        </div>
      </div>
        {showModal ?(
          <DeleteItem handleClose={handleClose}/>
        ):(<></>)}
    </>
    )
}

