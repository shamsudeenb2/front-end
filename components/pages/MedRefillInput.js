"use client";
import React, { useState } from "react";
import Button from "../button";
import InputField from "../inputField";
import Link from "next/link";
import Plus_btn from "@/components/plus_btn";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useRefillMutation,useRetrieveAllMedicsQuery,useRetrieveRefillQuery} from '@/redux/features/authApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import  Spinner  from '@/components/common/Spinner'

const MedRefillInput = () => {
  const router = useRouter();
	const dispatch = useAppDispatch();
  const [refillReminder, {isLoading : loading}] = useRefillMutation();
  const {data: medicine, isLoading, isFetching} = useRetrieveAllMedicsQuery()
  const {refetch} = useRetrieveRefillQuery();


  const [inputValue, setInputValue] = useState({
    medicine_description:"",
    medicine_type:"",
    reminder_date:"",
    reminder_time:""
  });
  const [med, setMed] = useState()
  const {
		medicine_description,
		medicine_type,
		reminder_date,
		reminder_time,
  } = inputValue;

  const handleMed = (e) => {
    setMed(Number(e.target.value))
    console.log(med)
  }
  const handleChange = (e) => {
    setMed(Number(medicine[0].id))
    const {name, value} = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    console.log(inputValue)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data ={
      medics_id: med,
      medicine_description: medicine_description,
      medicine_type: medicine_type,
      reminder_date: reminder_date,
      reminder_time: reminder_time,
    }
    console.log(data)
    try{
    await refillReminder(data).unwrap()
    // dispatch(setAuth());
    refetch()
    toast.success('successful');
    }
    catch(error){
      toast.error('server error');
    };
  };

   if (isLoading || isFetching) {
    return (
      <div className='flex justify-center my-8'>
        <Spinner lg />
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} className="m-auto w-auto">
        <div className="flex flex-col my-2 ">
          <label>Medicine Type</label>
          <select
            name="med"
            value={med}
            onChange={(e) => handleMed(e)}
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-80"
            >
              {medicine?.map((medics) => (
              <option key={medics.id} value={parseInt(medics.id)}>{medics.name}</option>
            ))}
          </select>
        </div>
      <div className="flex my-2">
        {/* <div className="flex flex-col my-2 ">
          <label>Medicine Type</label>
          <select
            name="medicine_type"
            value={medicine_type}
            onChange={(e) => handleChange(e)}
            // className=" py-3 px-12 rounded-2xl text-center"
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-80"
          >
            <option value="pills" >Pills</option>
            <option value="ointment" >Ointment</option>
            <option value="syrup">Syrup</option>
          </select>
        </div> */}
      </div>
      <div className="flex my-5">
        <div className="flex flex-col my-2 ">
          <label> Date </label>
          <InputField
            type="date"
            name="reminder_date"
            value={reminder_date} 
            onChange={handleChange}
            // className="w-[100%]"
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-40"
          />
        </div>
        <div className="flex flex-col my-2 ml-2 w-[100%]">
          <label>Time</label>
          <InputField
            type="time"
            name="reminder_time"
            value={ reminder_time}
            onChange={handleChange}
            // className="w-[100%]"
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-40"
          />
        </div>
      </div>
      {/* <Plus_btn to="" text="Add Time" className="mb-14" /> */}
      <button
        type="submit"
        className={`bg-[#4299A6] text-[#fff] rounded-full w-[80%] h-12 border m-5  flex justify-center pt-3`}
        disabled={loading}
      >
        {loading ? <Spinner sm /> : `Done`}
      </button>
    </form>
  );
};

export default MedRefillInput;
