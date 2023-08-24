"use client";
import React, { useState } from "react";
import Button from "./button";
import InputField from "./inputField";
import Link from "next/link";
import Plus_btn from "@/components/plus_btn";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useRecordMutation} from '@/redux/features/medicsApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import  Spinner  from '@/components/common/Spinner'

const MedRecordInput = () => {
  const router = useRouter();
	const dispatch = useAppDispatch();
	const [records, { isLoading }] = useRecordMutation();


  const [inputValue, setInputValue] = useState({
    name:"",
    selected_Med:"",
		medicine_description:"",
		reminder_date:"",
		reminder_time:"",
  });
  const {
    name,
    selected_Med,
		medicine_description,
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
    const medics_id = selected_Med
    records({
      name,
      medics_id,
			medicine_description,
			reminder_date,
			reminder_time,
     })
    .unwrap()
    .then(() => {
      dispatch(setAuth());
      toast.success('Logged in');
      router.push('/pages/homePage');
    })
    .catch(() => {
      toast.error('incorrect email or password');
    });
  };



  return (
    <form  onSubmit={handleSubmit} className="m-auto">
      <div className="flex flex-col my-2 ">
        <lebel>Disease Name</lebel>
        <InputField
          type="text"
          value={name}
          onChange={handleChange}
          className="pl-3"
          placeholder=""
        />
      </div>
      <div className="flex my-2">
        <div className="flex flex-col my-2 ">
          <lebel>Doctor’s Name</lebel>
          <select
            value={selected_Med}
            onChange={(e) => handleChange(e.target.value)}
            className=" py-3 px-12 text-center rounded-full"
          >
            <option value="pills">Pills</option>
            <option value="ointment">Ointment</option>
            <option value="syrup">Syrup</option>
          </select>
        </div>
      </div>
      <div className="flex my-5">
        <div className="flex flex-col my-2 ">
          <lebel>Date</lebel>
          <InputField
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            className="w-[100%]"
          />
        </div>
        <div className="flex flex-col my-2 ml-2 w-[100%]">
          <lebel>Time</lebel>
          <InputField
            type="time"
            name="time"
            value={time}
            onChange={handleChange}
            className="w-[100%]"
          />
        </div>
      </div>
      <div className="flex flex-col my-2 ml-2 w-[100%]">
        <textarea name="postContent" rows={9} cols={30} />
      </div>
      <button
        className={`bg-[#4299A6] text-[#fff] rounded-full w-[80%] h-12 border m-5 mt-10  flex justify-center pt-3`}
      >
        Done
      </button>
    </form>
  );
};

export default MedRecordInput;
