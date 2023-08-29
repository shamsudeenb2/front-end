"use client";
import React, { useState } from "react";
import Button from "../button";
import InputField from "../inputField";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useRecordMutation, useRetrieveRecordQuery} from '@/redux/features/authApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import  Spinner  from '@/components/common/Spinner'
// import Home from "../app/page";

const AppointInput = () => {
  const router = useRouter();
	const dispatch = useAppDispatch();
	const [records, { isLoading }] = useRecordMutation();
  const {refetch} = useRetrieveRecordQuery();

  const [inputValue, setInputValue] = useState({
    doctor_name: "",
    desease_name : "",
  });
  const {
    doctor_name,
    desease_name,
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
     await records({desease_name, doctor_name}).unwrap()
      // dispatch(setAuth());
      refetch()
      toast.success('successful');
    }
    catch(error){
      toast.error('server error');
    };
  };

  return (
    <form onSubmit={handleSubmit} className="m-auto"> 
      <div className="flex flex-col my-2">
        <label>Doctor Name</label>
        <InputField
          type="text"
          value={doctor_name}
          name="doctor_name"
          onChange={handleChange}
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
              focus:outline-none focus:border-sky-500 w-80"
        />
      </div>
      <div className="flex flex-col my-3 ">
        <label>Sickness Name</label>
        <InputField
          type="text"
          name="desease_name"
          value={desease_name}
          onChange={handleChange}
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
              focus:outline-none focus:border-sky-500 w-80"
        />
      </div>
      {/* <div className="flex flex-col my-7">
        <label className="py-2">Select Date</label>
        <InputField
          type="date"
          name="reminder_date"
          value={reminder_date}
          onChange={handleChange}
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
              focus:outline-none focus:border-sky-500 w-80"
        />
      </div>
      <div className="flex flex-col my-7">
        <label className="py-2">Select Time</label>
        <InputField
          type="time"
          name="reminder_time"
          value={reminder_time}
          onChange={handleChange}
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
              focus:outline-none focus:border-sky-500 w-80"
        />
      </div> */}
      <button
        className={`bg-[#4299A6] text-[#fff] rounded-full w-80 h-12 border m-2  flex justify-center pt-3`}
        disabled={isLoading}
        >
        {isLoading ? <Spinner sm /> : `Record`}
      </button>
    </form>
  );
};

export default AppointInput;
