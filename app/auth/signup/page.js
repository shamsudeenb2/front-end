import React from "react";
import Link from "next/link";
import SignUp from "@/components/pages/signupComponent";

export const metadata = {
	title: 'MediAid | Create Account',
	description: 'MediAid Sign Up Page',
};

const SignupPage = () => {
  return (
    <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg  inset-0 m-auto flex flex-col mt-5">
      <div className="relative h-full">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url(../reg_img.png)",
            zIndex: -1,
          }}
        ></div>
        
          <h1 className="text-center font-extrabold text-lg">Create Account</h1>
          <div className="my-5 mx-4 flex flex-col items-center justify-center">
             <SignUp />
             <p className='mt-2 text-center text-sm text-gray-500'>
					        Already have an account?{' '}
					         <Link
						         href='/auth/signin'
						         className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
				          	>
						           Login here
					          </Link>
				      </p>
            {/* <div className="flex justify-center">
              <p className=" text-center cursor-pointer">
                or <span className="text-[#1E4DBC]"> Sign Up </span> using
                Google
              </p>
              <img
                src="../google_icon.png"
                className="mx-2 h-4 w-4 mt-1 flex"
              />
            </div> */}
          </div>
      </div>
    </div>
  );
};

export default SignupPage;
