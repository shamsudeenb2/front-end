'use client'
import React, { useEffect, useState } from "react";
import CalenderButton from "components/calender_button.js";
import ReminderButton from "components/reminder_button.js";
import  Spinner  from '@/components/common/Spinner';
import DeleteItem from "@/components/DeleteComponent";
import { toast } from 'react-toastify';

import { useRetrieveRefillQuery,useDeleteRefillMutation } from '@/redux/features/authApiSlice';
export default function RefillReminder() {
    const {data: refills, isLoading, isFetching, refetch} = useRetrieveRefillQuery();
    const [deleteRefill, response] = useDeleteRefillMutation()
    const [showModal, setShowModal] = useState(false);
    const [iteId, setItemId]= useState({id:""})

    
    if (isLoading || isFetching) {
      return (
        <div className='flex justify-center my-8'>
          <Spinner lg />
        </div>
      );
    }
    const handleShow =(id)=>{
      setShowModal(true)
      setItemId({id:id})
    }
    const handleClose =()=>{
      setShowModal(false)
    }
    const handleDelete= async()=>{
      console.log(iteId)
      try {
      await deleteRefill(iteId)
      refetch()
      }catch (error) {
        toast.error('Error');
      }
      setShowModal(false)
    }
    return (
        <div className="md:flex md:flex-wrap ">
        {refills?.map((refill, i)=>(
          <div key={refill.id} className=" md:basis-1/2 ">
            <ReminderButton
              key={refill.id}
              reminder_type= "Med Refill Reminder"
              doc_name={refill.medics.name}
              date={`${refill.reminder_date} | ${refill.reminder_time}`}
              to="pages/signup"
              id={refill.id}
              onClick={handleShow}
              page="Refill"
              // className="bg-gradient-to-b from-[#D9D9D9] to-[#9EDAE3]"
              />
          </div>
        ))}
        {showModal ?(
          <DeleteItem handleClose={handleClose} handleDelete={handleDelete}/>
        ):(<></>)}
        </div>
    )
}



