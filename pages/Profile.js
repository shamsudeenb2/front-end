"use client";

import { useRetrieveProfileQuery, useRetrieveUserQuery, useUpdateProfileMutation } from "@/redux/features/authApiSlice";
import  List  from "@/components/common/List";
import  Spinner  from "@/components/common/Spinner";
import Image from "next/image";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toast } from 'react-toastify';



export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const { data: profileS, isLoading: loadingF, isFetching: fetchingF, refetch } = useRetrieveProfileQuery();
  const [updatePeofile, {isLoading : loading}] = useUpdateProfileMutation();
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState({
    sickness_name:"Hiv/Aids",
    gender:"Male",
    profile_img:"",
    raw:"",
  });
  const [uploadedFile, setUploadedFile] = useState('');

  if (isLoading || isFetching && loadingF || fetchingF) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  const {
		sickness_name,
		gender,
		profile_img,
    raw,
  } = inputValue;

  const handleImage= e => {
    if (e.target.files.length) {
      setInputValue({
        profile_img: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
    
  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append('profile_img', raw)
    const jsonData = {
      sickness_name: sickness_name,
      gender: gender,
    };
    
    formData.append('jsonPart', JSON.stringify(jsonData));
    try{
      await updatePeofile({formData, id:profileS[0].id}).unwrap()  
      refetch()
      toast.success('successful');
    }
    catch(reject) {
      console.error(reject);
      toast.error('server error')
    };
  };
  return (
       <>
        <div className="mx-auto max-w-10xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {/* <UploadImage handleImage={handleImage} inputValue={inputValue} /> */}
            <div className="flex justify-center">
              <label htmlFor="upload-button">
                {profile_img?(
                  <Image src={profile_img} alt="profile" width="90" height="50" className="w-20 h-20 bg-gray-200 border-2 border-gray-300 rounded-full" />
                ) : profileS[0].profile_img ?(
                  <Image src={profileS[0].profile_img} alt="profile" width="100" height="100" className="w-30 h-21 bg-gray-200 border-2 border-gray-300 rounded-full" />
                ):(
                  <div>
                    <div
                    htmlFor="imageUpload"
                    className="w-20 h-20 bg-gray-200 border-2 border-gray-300 rounded-full"
                 ></div>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={(e)=>handleImage(e)}
              />
            </div>
          </h1>
        </div>
       
      <main className="mx-auto py-3 my-0 sm:px-3 lg:px-8">
        <hr/>
       <div className='flex justify-center py-5'>
					<div>
						<div className='text-sm font-semibold my-4 leading-6 text-gray-900'>
               {`${user?.first_name} ${user?.last_name}`|| <Spinner sm />}
               <hr/>
            </div>
            <div className="flex flex-col my-4 ">
                <select
                  name="gender"
                  value={gender}
                  onChange={(e) => handleChange(e)}
                  className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
                  focus:outline-none focus:border-sky-500 w-80"
                  >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
            </div>
            <div className="flex flex-col my-4 ">
                <select
                    name="sickness_name"
                    value={sickness_name}
                    onChange={(e) => handleChange(e)}
                    // className=" py-3 px-12 rounded-2xl text-center"
                    className="border border-[#E8F3F1] py-2 px-2 rounded-3xl
                    focus:outline-none focus:border-sky-500 w-80"
                  >
                    <option value="Hiv/Aids" >Hiv/Aids</option>
                    <option value="Sickle Cell" >Sickle Cell</option>
                    <option value="Diabetics">Diabetics</option>
                </select>
              </div>
            <div className='text-sm font-semibold my-4 leading-6 text-gray-900'>
                {user?.phone_number || <Spinner sm />}
               <hr/>
            </div>
            <div className='text-sm font-semibold my-4 leading-6 text-gray-900'>
               {user?.email || <Spinner sm />}
               <hr/>
            </div>
            <div className='text-sm font-semibold my-4 leading-6 text-gray-900'>
               {user?.date_of_birth || <Spinner sm />}
               <hr/>
            </div>
					</div>
				</div>
        <br />
        <button
        onClick={handleSubmit}
        className={`bg-[#4299A6] text-[#fff] rounded-full w-[80%] h-12 border mx-9 flex justify-center pt-3`}
        disabled={loading}
        >
        {loading ? <Spinner sm /> : `Done`}
       </button>
        {/* <List config={config} /> */}
      </main>
    </>
  );
}
