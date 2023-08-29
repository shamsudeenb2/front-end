'use client'
import React, { useEffect, useState } from "react";
import CalenderButton from "components/calender_button.js";
import ReminderButton from "components/reminder_button.js";
import  Spinner  from '@/components/common/Spinner';
import DeleteItem from "@/components/DeleteComponent";
import { toast } from 'react-toastify';

import { useRetrieveMedicationQuery, useDeleteMedicationMutation } from '@/redux/features/authApiSlice';
export default function Medication() {
    const {data: medication, isLoading, isFetching, refetch} = useRetrieveMedicationQuery();
    const [deleteMedication, response] = useDeleteMedicationMutation()
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
      setItemId({id:id})
    }
    const handleClose =()=>{
      setShowModal(false)
    }
    const handleDelete= async()=>{
      console.log(iteId)
      try {
      await deleteMedication(iteId)
      refetch()
      }catch (error) {
        toast.error('Error');
      }
      setShowModal(false)
    }
    
    console.log('delete res',response.isLoading)
    return (
        <div className="md:flex md:flex-wrap ">
        {medication?.map((medics, i)=>(
          <div key={medics.id} className=" md:basis-1/2 ">
            <ReminderButton
              key={medics.id}
              reminder_type= "Medication Reminder"
              doc_name={medics.medics.name}
              date={`${medics.medics.reminder_date} | ${medics.reminder_time}`}
              dosage_name={`Dosage   x${medics.medics.medicine_qty}`}
              to="pages/signup"
              onClick={handleShow}
              id={medics.id}
              page="Medication"
              />
          </div>
        ))}
         {showModal ?(
          <DeleteItem handleClose={handleClose} handleDelete={handleDelete} isDeleting={response.isLoading}/>
        ):(<></>)}
        </div>
    )
}



