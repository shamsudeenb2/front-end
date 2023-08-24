"use client";
import React, { useState } from "react";
import Button from "../components/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation, useRetrieveProfileQuery} from '@/redux/features/authApiSlice';
import { setAuth, setError } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import  continueWithGoogle from '@/utils/continueWithSocialAuth';
import  Spinner  from '@/components/common/Spinner';

const Login = () => {
  const router = useRouter();
	const dispatch = useAppDispatch();
	const [login, { isLoading }] = useLoginMutation();
  const {  refetch} = useRetrieveProfileQuery();
 

  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password })
    .unwrap()
    .then(() => {
      toast.success('Logged in');
      dispatch(setAuth());
      refetch()
      router.push('/pages/homePage');
    })
    .catch((rejected) => {
      toast.error(rejected.data.detail);
    });
  };
  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-2">
            <input
              type="text"
              className="border border-[#E8F3F1] py-3 px-6 rounded-3xl
             focus:outline-none focus:border-sky-500 bg-[#F9FAFB] "
              value={inputValue.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter your email/Phone Number"
              required
              
            />
          </div>
          <div>
          <div className='text-sm'>
					</div>
          <div className="flex flex-col my-3 ">
            <input
              type="password"
              value={inputValue.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className=" border border-[#E8F3F1] py-3 px-5 rounded-3xl
             focus:outline-none focus:border-sky-500 bg-[#F9FAFB]"
            />
            <Link href='/password-reset' className="text-[#4299A6] text-right">Forgot Password?</Link>
          </div>
          </div>
          <button
            type="submit"
            className="bg-[#4299A6] text-[#fff] rounded-full w-80 h-12 border m-2  flex justify-center pt-3"
            disabled={isLoading}
          >
            {isLoading ? <Spinner sm /> : `Login`}
          </button>
          <div className="flex justify-center">
            <p className=" text-center py-3">
              Don’t have an account?
              <span className="text-[#4299A6]">
                <Link href="../auth/signup">Sign Up</Link>
              </span>
            </p>
          </div>
          <p className="text-center">OR</p>
          <Button
            text="Sign in with Google"
            color="#fff"
            textColor="#000"
            image="../google_icon.png"
            onClick={continueWithGoogle}
                    />
        </form>
    </>
  );
};

export default Login;
