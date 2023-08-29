import React from "react";
// import CalenderButton from "components/calender_button.js";
// import ReminderButton from "components/reminder_button.js";
// import NabBtn from "@/components/button_image";
import Link from "next/link";
import Button from "@/components/button";
import Doctors from "@/components/pages/DoctorListComponent";
import Plus_btn from "@/components/plus_btn";
import Spinner from "@/components/common/Spinner";
import dynamic from "next/dynamic";

const DynamicDoclist = dynamic(()=> import("@/components/pages/DoctorListComponent"),{
  loading: ()=> <><Spinner/></>
})
export default function Doc_appointment() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleToggleModal = () => {
  //   setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  // };

  return (
    <div className="max-w-2xl min-h-screen  md:rounded md:overflow-hidden md:shadow-lg m-auto relative items-center justify-center">
      {/* {isModalOpen && (
        <div className="absolute right-0 top-5 bg-[#95CBD3] rounded-lg pb-7 w-8/12">
          <div className="modal-content">
            <img src="../MedAidlogo.png" className="flex m-auto" />
            <div className="border border-[#00000073] mx-2"></div>
            <NabBtn
              text="Doctor’s Appointment"
              to="../pages/doc_appointment"
              className="w-11/12 bg-[#fff] text-[red]"
            />
            <div className="border border-[#00000073] mx-2 my-4"></div>
            <NabBtn
              text="Med Reminder"
              to="pages/signup"
              className="w-11/12 bg-[#fff] text-[#000]"
            />
            <div className="border border-[#00000073] mx-2 my-4"></div>
            <NabBtn
              text="Med Refill Reminder"
              to="pages/signup"
              className="w-11/12 bg-[#fff] text-[#000]"
            />
            <div className="border border-[#00000073] mx-2 my-4"></div>
            <NabBtn
              text="Medical Records"
              to="pages/signup"
              className="w-11/12 bg-[#fff] text-[#000]"
            />
            <div className="border border-[#00000073] mx-2 my-5"></div>
          </div>
          <Button text="Logout" to="" className="w-40 m-auto" />
        </div>
      )}
      <div className="flex justify-between m-4">
        <div>
          <h1 className="font-4xl font-bold">Doctor Appointment</h1>
        </div> 
         <div className="flex justify-between">
          <img
            className="w- h-3/5 m- flex justify-center"
            onClick={handleToggleModal}
            src="../Menu.png"
          />
        </div>
      </div> */}
      <div>
        <div className="flex justify-center mt-5">
          <h1 className="mx-2 font-extrabold text-md">Doctor Appointments</h1>
        </div>
        <div className="my-5 mx-4 flex ">
          <Plus_btn to="add/" text="Add Doctor Appointment" />
        </div>
          <DynamicDoclist/>
      </div>
    </div>
  );
}
