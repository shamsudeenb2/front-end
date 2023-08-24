import React from "react";
import Button from "@/components/button";
import Link from "next/link";

import Image from "next/image";
import BottomImg from "@/components/svg_image";

import Login from "@/pages/LoginComponent";

export const metadata = {
	title: 'MediAid | Sign In',
	description: 'MediAid Sign In Page',
};

const SigninPage = () => {
  return (
    <div>
      <div className="inset-0 m-auto flex flex-col mt-10 ">
        <h1 className="text-center font-extrabold text-lg">Login</h1>
        <div className="my-5 m-auto flex flex-col">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
