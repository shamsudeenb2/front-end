'use client'
import React, { useEffect, useState } from "react";
import CalenderButton from "components/calender_button.js";
import ReminderButton from "components/reminder_button.js";
import  Spinner  from '@/components/common/Spinner';
import { useRetrieveDoctorQuery, useDeleteDoctorMutation } from '@/redux/features/authApiSlice';
import DeleteItem from "@/components/DeleteComponent";
import { toast } from 'react-toastify';

export default function Doctors() {
  const {data: doctors, isLoading, isFetching, refetch} = useRetrieveDoctorQuery();
  const [deleteDoctor, response] = useDeleteDoctorMutation()
  const [showModal, setShowModal] = useState(false);
  const [iteId, setItemId]= useState({id:""})

    // useEffect(() => {
    //   // This effect will run when the component mounts
    //   refetch(); // Manually fetch data on initial render
    // }, [iteId.id]);
    
    if (isLoading || isFetching) {
      return (
        <div className='flex justify-center my-8'>
          <Spinner lg />
        </div>
      );
    }

    const handleShow =(id)=>{
      setShowModal(true)
      console.log(id)
      setItemId({id:id})
    }
    const handleClose =()=>{
      setShowModal(false)
    }
    const handleDelete= async()=>{
      console.log(iteId)
      try {
      await deleteDoctor(iteId)
      refetch()
      }catch (error) {
        toast.error('Error');
      }
      setShowModal(false)
    }

    return (
        <div className="md:flex md:flex-wrap ">
        {doctors?.map((doctor, i)=>(
          <div key={doctor.id} className=" md:basis-1/2 ">
            <ReminderButton
              key={doctor.id}
              reminder_type= "Doctor Appointment"
              doc_name={doctor.name}
              date={`${doctor.reminder_date} | ${doctor.reminder_time}`}
              to="pages/signup"
              onClick={handleShow}
              id={doctor.id}
              page="Doctor"
              />
              
          </div>
        ))}
         {showModal ?(
          <DeleteItem handleClose={handleClose} handleDelete={handleDelete}/>
        ):(<></>)}
      </div>
    )
}



