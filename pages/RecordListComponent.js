'use client'
import React, { useEffect, useState } from "react";
import CalenderButton from "components/calender_button.js";
import ReminderButton from "components/reminder_button.js";
import  Spinner  from '@/components/common/Spinner';
import DeleteItem from "@/components/DeleteComponent";
import { toast } from 'react-toastify';
import { useRetrieveRecordQuery, useDeleteRecordMutation, useRetrieveProfileQuery } from '@/redux/features/authApiSlice';
export default function Record() {
    const {data: records, isLoading, isFetching,refetch} = useRetrieveRecordQuery();
    const { data: profileS, isLoading: loadingF, isFetching: fetchingF} = useRetrieveProfileQuery();

    const [deleteRecord, response] = useDeleteRecordMutation()
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
      await deleteRecord(iteId)
      refetch()
      }catch (error) {
        toast.error('incorrect email or password');
      }
      setShowModal(false)
    }

    return (
        <div className=" ">
        {records?.map((record, i)=>(
          <div key={record.id} className=" ">
            {/* <ReminderButton
              key={record.id}
              reminder_type= "Medical Records"
              doc_name={record.doctor_name}
              date={`${record.date_created}`}
              to="pages/signup"
              onClick={handleShow}
              id={record.id}
              page="Record"
              // className="bg-gradient-to-b from-[#D9D9D9] to-[#9EDAE3]"
              /> */}
               <div
                className={`z-10 rounded-xl  border m-3 px-6 pt-6 pb-2 rounded overflow-hidden shadow-lg  bg-[#9EDAE3]`}
                >
                <div className="flex justify-between">
                  <p className={`font-bold text-xl `}>Medical Records</p>
                    <button onClick={()=>handleShow(record.id)}>
                    <svg
                          className="w-25 flex-initial ml-3"
                          width="22"
                          height="24"
                          viewBox="0 0 22 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.9342 6.11717C20.9118 6.11717 20.8783 6.11717 20.8449 6.11717C14.9398 5.52555 9.04585 5.30229 3.2077 5.89392L0.930501 6.11717C0.461666 6.16182 0.0486446 5.82694 0.00399367 5.35811C-0.0406573 4.88927 0.294225 4.48741 0.751897 4.44276L3.0291 4.21951C8.96771 3.61672 14.9844 3.85114 21.0123 4.44276C21.47 4.48741 21.8049 4.90043 21.7602 5.35811C21.7267 5.79345 21.3583 6.11717 20.9342 6.11717Z"
                            fill="#292D32"
                          />
                          <path
                            d="M6.9819 4.98974C6.93725 4.98974 6.8926 4.98974 6.83679 4.97858C6.39028 4.90044 6.07772 4.4651 6.15586 4.01859L6.40144 2.55627C6.58004 1.48464 6.82562 0 9.4265 0H12.3511C14.9632 0 15.2088 1.54046 15.3762 2.56743L15.6218 4.01859C15.7 4.47626 15.3874 4.9116 14.9409 4.97858C14.4832 5.05672 14.0479 4.74416 13.9809 4.29765L13.7353 2.8465C13.579 1.87534 13.5455 1.68557 12.3623 1.68557H9.43766C8.25445 1.68557 8.23213 1.84185 8.06469 2.83534L7.80794 4.28649C7.74097 4.69951 7.38376 4.98974 6.9819 4.98974Z"
                            fill="#292D32"
                          />
                          <path
                            d="M14.4717 24H7.30523C3.40943 24 3.25315 21.8456 3.13036 20.1042L2.40479 8.86327C2.3713 8.4056 2.72851 8.00375 3.18618 7.97026C3.65501 7.94793 4.04571 8.29398 4.0792 8.75165L4.80478 19.9926C4.92757 21.6893 4.97222 22.3256 7.30523 22.3256H14.4717C16.8159 22.3256 16.8605 21.6893 16.9722 19.9926L17.6978 8.75165C17.7312 8.29398 18.1331 7.94793 18.5908 7.97026C19.0484 8.00375 19.4057 8.39443 19.3722 8.86327L18.6466 20.1042C18.5238 21.8456 18.3675 24 14.4717 24Z"
                            fill="#292D32"
                          />
                          <path
                            d="M12.7412 17.8604H9.02396C8.56627 17.8604 8.18674 17.4809 8.18674 17.0232C8.18674 16.5656 8.56627 16.186 9.02396 16.186H12.7412C13.1988 16.186 13.5784 16.5656 13.5784 17.0232C13.5784 17.4809 13.1988 17.8604 12.7412 17.8604Z"
                            fill="#292D32"
                          />
                          <path
                            d="M13.6787 13.3951H8.09734C7.63967 13.3951 7.26014 13.0156 7.26014 12.5579C7.26014 12.1002 7.63967 11.7207 8.09734 11.7207H13.6787C14.1364 11.7207 14.5159 12.1002 14.5159 12.5579C14.5159 13.0156 14.1364 13.3951 13.6787 13.3951Z"
                            fill="#292D32"
                          />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-between py-2">
                  <p className={`font-semibold`}>Doctor's Name: {record.doctor_name}</p>
                  <p className={`font-semibold`}>Doctor's Phone:  048857463663</p>
                </div>
                
                <div className="flex md:mt-7 justify-between">
                  <p className={`font-medium font-semibold text-gray-700 text-[#474646]`}> Gender: {profileS[0]?.gender}</p>
                  <p className={`font-medium font-semibold text-gray-700 text-[#474646]`}>Deaseasis: {profileS[0]?.sickness_name}</p>
                </div>
              </div>
          </div>
        ))}
          {showModal ?(
          <div className="max-w-2xl md:flex justify-center">
            <DeleteItem handleClose={handleClose} handleDelete={handleDelete}/>
          </div>
        ):(<></>)}
        </div>
    )
}



