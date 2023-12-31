"use client";
import React, { useState } from "react";
import Button from "../button";
import InputField from "../inputField";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useDoctorMutation,useRetrieveDoctorQuery} from '@/redux/features/authApiSlice';
import { setAuth, setUser } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import  Spinner  from '@/components/common/Spinner'
// import Home from "../app/page";

export default function AppointInput(){
  const router = useRouter();
	const dispatch = useAppDispatch();
	const [doctor, { isLoading }] = useDoctorMutation();
  const {refetch} = useRetrieveDoctorQuery();
  const [inputValue, setInputValue] = useState({
    name: "",
    doctor_email : "",
    doctor_phone: "+234 ",
    reminder_date:"",
    reminder_time:""
  });
  const {
    name,
    doctor_email,
    doctor_phone,
		reminder_date,
		reminder_time,
  } = inputValue;

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue)
    try{
    const data = await doctor({inputValue}).unwrap()
    //  dispatch(setAuth());
     refetch()
      // dispatch(setUser(data));
      toast.success('successful');
    }
    catch(error) {
      toast.error('server error',error);
    };
  };

  return (
    <form onSubmit={handleSubmit} className="m-auto"> 
    <div className="md:flex md:flex-wrap">
     <div className="md:flex md:flex-col my-2 md:mx-2">
        <label>Doctor Name</label>
        <InputField
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
              focus:outline-none focus:border-sky-500 w-80 md:w-40"
        />
      </div>
      <div className="flex flex-col my-3 md:mx-2">
        <label>Phone Number</label>
        <InputField
          type="text"
          name="doctor_phone"
          value={doctor_phone}
          onChange={handleChange}
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
              focus:outline-none focus:border-sky-500 w-80 md:w-40"
        />
      </div>
    </div>
    <div className="md:flex md:flex-wrap">
    <div className="flex flex-col my-7 md:mx-2">
        <label className="py-2">Select Date</label>
        <InputField
          type="date"
          name="reminder_date"
          value={reminder_date}
          onChange={handleChange}
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
              focus:outline-none focus:border-sky-500 w-80 md:w-40"
        />
      </div>
      <div className="flex flex-col my-7 md:mx-2">
        <label className="py-2">Select Time</label>
        <InputField
          type="time"
          name="reminder_time"
          value={reminder_time}
          onChange={handleChange}
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
              focus:outline-none focus:border-sky-500 w-80 md:w-40"
        />
      </div>

    </div>
     
      <button
        className={`bg-[#4299A6] text-[#fff] rounded-full w-80 h-12 border m-2  flex justify-center pt-3`}
        disabled={isLoading}
        >
        {isLoading ? <Spinner sm /> : `Book Appointment`}
      </button>
    </form>
  );
};


