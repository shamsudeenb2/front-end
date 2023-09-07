"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import  Spinner  from '@/components/common/Spinner';


const SignUp = () => {
  const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    date_of_birth: "",
    password: "",
    phone_number: "+234 ",
    re_password: "",
  });
  const {
    name,
    date_of_birth,
    email,
    phone_number,
    re_password,
    password,
  } = inputValue;

  const handleChange = (e) => {
    console.log(typeof(phone_number), phone_number)
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const first_name = name.split(" ")[0]
    const last_name = name.split(" ")[1]
    // const phone_number = "+234 " + phone_number
    e.preventDefault();
    console.log(phone_number)
    try{
       await register({ first_name, last_name, email, password, re_password,phone_number, date_of_birth}).unwrap()
				toast.success('Please check email to verify account');
				router.push('/auth/signin');
			}
			catch(rejected) {
				toast.error(rejected.data.email[0]);
			};
  };
  
  return (
    <form onSubmit={handleSubmit} className="m-auto">
      <div className="md:flex md:flex-wrap">
       <div className="md:flex md:flex-col my-2 md:mx-2">
        <label className="font-bold">Full Name</label>
        <input
          type="text"
          className=" border border-[#E8F3F1] py-2 px-5 rounded-3xl focus:outline-none focus:border-sky-500 w-80 md:w-40"
          value={inputValue.name}
          name="name"
          onChange={handleChange}
          required
        />
        </div>
        <div className="md:flex md:flex-col my-2 md:mx-2">
        <label className="font-bold">Date of Birth</label>
        <input
          required
          type="date"
          value={inputValue.date_of_birth}
          name="date_of_birth"
          onChange={handleChange}
          className=" border border-[#E8F3F1] py-2 px-5 rounded-3xl focus:outline-none focus:border-sky-500 w-80 md:w-40"
        />
       </div>

      </div>
      <div className="md:flex md:flex-wrap">
          <div className="md:flex md:flex-col my-2 md:mx-2">
            <label className="font-bold">Email Address</label>
            <input
              required
              type="email"
              value={inputValue.email}
              name="email"
              onChange={handleChange}
              className=" border border-[#E8F3F1] py-2 px-5 rounded-3xl focus:outline-none focus:border-sky-500 w-80 md:w-40"
            />
          </div>
          <div className="md:flex md:flex-col my-2 md:mx-2">
            <label className="font-bold">Phone Number</label>
            <input
              required
              type="tel"
              value={inputValue.phone_number}
              name="phone_number"
              onChange={handleChange}
              className=" border border-[#E8F3F1] py-2 px-5 rounded-3xl focus:outline-none focus:border-sky-500 w-80 md:w-40"
            />
          </div>
      </div>
      <div className="md:flex md:flex-wrap">

      <div className="md:flex md:flex-col my-2 md:mx-2">
        <label className="font-bold">Password</label>
        <input
          required
          type="password"
          value={inputValue.password}
          name="password"
          onChange={handleChange}
          className=" border border-[#E8F3F1] py-2 px-5 rounded-3xl focus:outline-none focus:border-sky-500 w-80 md:w-40"
        />
      </div>
      <div className="md:flex md:flex-col my-2 md:mx-2">
        <label className="font-bold">Confirm Password</label>
        <input
          required
          type="password"
          value={inputValue.re_password}
          name="re_password"
          onChange={handleChange}
          className=" border border-[#E8F3F1] py-2 px-5 rounded-3xl fouse w-full focus:outline-none focus:border-sky-500 w-80 md:w-40"
        />
      </div>
      </div>
      
      <button
        type="submit"
        className="bg-[#4299A6] text-[#fff] rounded-full w-80 h-12 border m-2  flex justify-center pt-3"
        disabled={isLoading}
      >
        {isLoading ? <Spinner sm /> : `Sing Up`}
      </button>
    </form>
  );
};

export default SignUp;
