"use client";
import React, { useState } from "react";
import Button from "../components/button";
import InputField from "../components/inputField";
import Link from "next/link";
import Plus_btn from "@/components/plus_btn";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useMedicationMutation, useRetrieveMedicationQuery} from '@/redux/features/authApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import  Spinner  from '@/components/common/Spinner'

const MedReminderInput = () => {
  const router = useRouter();
	const dispatch = useAppDispatch();
	const [medication, { isLoading }] = useMedicationMutation();
  const { refetch} = useRetrieveMedicationQuery();


  const [inputValue, setInputValue] = useState({
    name:"",
    medicine_description:"",
    selected_frequency:1,
    medicine_qty:"",
    medicine_type:"",
    reminder_date:"",
    reminder_time:"",
  });
  const [time, setTime] = useState({
    reminder_time1:"",
    reminder_time2:"",
    reminder_time3:"",
    reminder_time4:"",
    reminder_time5:"",
  })
  const {
    name,
    selected_frequency,
		medicine_description,
    medicine_qty,
		medicine_type,
		reminder_date,
		reminder_time,
  } = inputValue;
  const {
    reminder_time1,
    reminder_time2,
    reminder_time3,
    reminder_time4,
    reminder_time5
  } = time

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    console.log(inputValue)
  };

  const handleTime = (e) => {
    const {name, value} = e.target
    setTime({
      ...time,
      [name]: value,
    });
    console.log(time)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue)
    let frequency=[]
    if(reminder_time5!=""){
      frequency.push({reminder_time:reminder_time1, medicine_desc:"Morning"})
      frequency.push({reminder_time:reminder_time2, medicine_desc:"Afternoon"})
      frequency.push({reminder_time:reminder_time3, medicine_desc:"Afternoon"})
      frequency.push({reminder_time:reminder_time4, medicine_desc:"evening"})
      frequency.push({reminder_time:reminder_time5, medicine_desc:"evening"})
    }else if(reminder_time4!=""){
      frequency.push({reminder_time:reminder_time1, medicine_desc:"Morning"})
      frequency.push({reminder_time:reminder_time2, medicine_desc:"Afternoon"})
      frequency.push({reminder_time:reminder_time3, medicine_desc:"Afternoon"})
      frequency.push({reminder_time:reminder_time4, medicine_desc:"evening"})
    }else if(reminder_time3!=""){
      frequency.push({reminder_time:reminder_time1, medicine_desc:"Morning"})
      frequency.push({reminder_time:reminder_time2, medicine_desc:"Afternoon"})
      frequency.push({reminder_time:reminder_time3, medicine_desc:"evening"})
    }else if(reminder_time2!=""){
      frequency.push({reminder_time:reminder_time1, medicine_desc:"Morning"})
      frequency.push({reminder_time:reminder_time2, medicine_desc:"evening"})
    }else{
      frequency.push({reminder_time:reminder_time1, medicine_desc:"Morning"})
    }
    console.log(frequency)
    const data={
      name:name,
      selected_frequency:selected_frequency,
      medicine_description:medicine_description,
      medicine_qty:medicine_qty,
      medicine_type:medicine_type,
      reminder_date:reminder_date,
      reminder_time:reminder_time1,
      frequency:frequency
    }
    try{
      await medication(data).unwrap()
      dispatch(setAuth());
      refetch()
      toast.success('successful');
      // router.push('/pages/homePage');
    }
    catch(error){
      toast.error('server error');
    };
  };

  return (
    <form onSubmit={handleSubmit} className="m-auto">
      <div className="md:flex md:flex-wrap">
      <div className="flex flex-col my-2 md:mx-2">
        <label>Medicine name</label>
        <InputField
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          // className="pl-3"
          placeholder=""
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-80 md:w-40"
          required
        />
      </div>
      <div className="flex flex-col my-2 md:mx-2">
        <label>Medicine Type</label>
        <InputField
          type="text"
          value={medicine_type}
          name="medicine_type"
          onChange={handleChange}
          // className="pl-3"
          placeholder=""
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-80 md:w-40"
          required
        />
      </div>
      </div>
      
      {/* <div className="flex my-2"> */}
      <div className="md:flex md:flex-wrap">
      <div className="flex flex-col my-2 md:mx-2">
          <label>Frequency</label>
          <select
            name="selected_frequency"
            value={selected_frequency}
            onChange={(e) => handleChange(e)}
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-80 md:w-40"
            // className=" py-3 px-12 rounded-2xl text-center"
          >
            <option value='1'>1</option>
            <option value='2' >2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div className="flex flex-col my-2 md:mx-2">
          <label>Quantity</label>
          <InputField
          type="text"
          value={medicine_qty}
          name="medicine_qty"
          onChange={handleChange}
          // className="pl-3"
          placeholder=""
          className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-80 md:w-40"
          required
        />
        </div>
      </div>
        
      {/* </div> */}
      {/* <label>Frequency</label>
      <div className="flex flex-col p-5 bg-[#b3ccd1]">
        <select
        name="selected_frequency"
          value={selected_frequency}
          onChange={(e) => handleChange(e)}
          className=" py-3 text-center rounded-lg "
        >
          <option value="one">Once</option>
          <option value="everyday" >Everyday</option>
        </select> */}
        {/* <button
          className={`bg-[#4299A6] text-[#fff] rounded-xl w-32 h-12 border mx-auto mt-5 flex justify-center pt-3`}
        >
          Refill
        </button> */}
      {/* </div> */}
      <div className="flex my-5">
        <div className="flex flex-col my-2 ">
          <label>Date </label>
          <InputField
            type="date"
            name="reminder_date"
            value={reminder_date} 
            onChange={handleChange}
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-40"
          />
        </div>
        {selected_frequency >= 1?(
          <div className="flex flex-col my-2 ml-2 w-[100%]">
          <label>Time</label>
          <InputField
            type="time"
            name="reminder_time1"
            value={ reminder_time1}
            onChange={handleTime}
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-40"
          />
        </div>
        ):(<></>)}
      </div>
      <div className="flex my-5">
       {selected_frequency >= 2?(
          <div className="flex flex-col my-2 ml-2 w-[100%]">
          <label>Time</label>
          <InputField
            type="time"
            name="reminder_time2"
            value={ reminder_time2}
            onChange={handleTime}
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-40"
          />
        </div>
        ):(<></>)}
       {selected_frequency >= 3?(
        <div className="flex flex-col my-2 ml-2 w-[100%]">
         <label>Time</label>
         <InputField
           type="time"
           name="reminder_time3"
           value={ reminder_time3}
           onChange={handleTime}
           className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
           focus:outline-none focus:border-sky-500 w-40"
         />
       </div>
        ):(<></>)}
     </div>
      <div className="flex my-5">
        {selected_frequency >= 4?(
          <div className="flex flex-col my-2 ml-2 w-[100%]">
          <label>Time</label>
          <InputField
            type="time"
            name="reminder_time4"
            value={reminder_time4}
            onChange={handleTime}
            className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
            focus:outline-none focus:border-sky-500 w-40"
          />
        </div>
        ):(<></>)}
        {selected_frequency >= 5?(
           <div className="flex flex-col my-2 ml-2 w-[100%]">
           <label>Time</label>
           <InputField
             type="time"
             name="reminder_time5"
             value={reminder_time5}
             onChange={handleTime}
             className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
             focus:outline-none focus:border-sky-500 w-40"
           />
         </div>
         ):(<></>)}
        </div>
      {/* <Plus_btn to="" text="Add Time" className="mb-14" /> */}
      <button
        type="submit"
        className={`bg-[#4299A6] text-[#fff] rounded-full w-[80%] h-12 border m-5  flex justify-center pt-3`}
        disabled={isLoading}
      >
        {isLoading ? <Spinner sm /> : `Done`}
      </button>
    </form>
  );
};

export default MedReminderInput;
