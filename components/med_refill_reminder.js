"use client";
import React, { useState } from "react";
import Button from "./button";
import InputField from "./inputField";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useMedicationMutation} from '@/redux/features/medicsApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import  Spinner  from '@/components/common/Spinner'

const MedRefillReminderInput = () => {
  const router = useRouter();
	const dispatch = useAppDispatch();
	const [reminder, { isLoading }] = useMedicationMutation();


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
    reminder({
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
    <form className="m-auto">
      <div className="flex flex-col my-2 ">
        <lebel>Medicine name</lebel>
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
          <lebel>Medicine Type</lebel>
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
            name="reminder_date"
            value={reminder_date}             
            onChange={handleChange}
            className="w-[100%]"
          />
        </div>
        <div className="flex flex-col my-2 ml-2 w-[100%]">
          <lebel>Time</lebel>
          <InputField
            type="time"
            name="reminder_time"
            value={reminder_time}
            onChange={handleChange}
            className="w-[100%]"
          />
        </div>
      </div>
      <button
        className={`bg-[#4299A6] text-[#fff] rounded-full w-[80%] h-12 border m-5 mt-10  flex justify-center pt-3`}
        disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `Done`}
      </button>
    </form>
  );
};

export default MedRefillReminderInput;
