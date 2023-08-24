'use client';
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation, useRetrieveProfileQuery, useRetrieveUserQuery} from '@/redux/features/authApiSlice';
import { logout as setLogout, setProfile } from '@/redux/features/authSlice';
import  NavLink  from '@/components/common/NavLink';
import  Spinner  from "@/components/common/Spinner";

export default function Navbar() {
	const pathname = usePathname();
	const dispatch = useAppDispatch();
	const router = useRouter();

	const { data: profile, error , isLoading: loadingF, isFetching: fetchingF, refetch} = useRetrieveProfileQuery();

	const [logout] = useLogoutMutation();
	const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
	const { isAuthenticated } = useAppSelector(state => state.auth);
	  
	const handleLogout = () => {
		console.log('logOut')
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
				// router.push('/auth/signin')
			});
	};

	const isSelected =(path)=> (pathname === path ? true : false);

	const authLinks = (isMobile) => (
		<>
			<NavLink
				isSelected={isSelected('/pages/homePage')}
				isMobile={isMobile}
				href='/pages/homePage'
			>
				Home
			</NavLink>
            <NavLink
				isSelected={isSelected('/pages/doc_appointment/list')}
				isMobile={isMobile}
				href='/pages/doc_appointment/list'
			>
				Appointments
			</NavLink>
            <NavLink
				isSelected={isSelected('/pages/med_record/list')}
				isMobile={isMobile}
				href='/pages/med_record/list'
			>
				Records
			</NavLink>
            <NavLink
				isSelected={isSelected('/pages/med_refill_reminder/list')}
				isMobile={isMobile}
				href='/pages/med_refill_reminder/list'
			>
				Refill Reminders
			</NavLink>
            <NavLink
				isSelected={isSelected('/pages/med_reminder/list')}
				isMobile={isMobile}
				href='/pages/med_reminder/list'
			>
				Med Intakes
			</NavLink>
			<NavLink
				isSelected={isSelected('/pages/profile')}
				isMobile={isMobile}
				href='/pages/profile'
			>
				Profile
			</NavLink>
			<NavLink isMobile={isMobile} onClick={handleLogout}>
				Logout
			</NavLink>
		</>
	);

	const guestLinks = (isMobile) => (
		<>
			<NavLink
				isSelected={isSelected('/auth/signin')}
				isMobile={isMobile}
				href='/auth/signin'
			>
				Login
			</NavLink>
			<NavLink
				isSelected={isSelected('/auth/signup')}
				isMobile={isMobile}
				href='/auth/signup'
			>
				Register
			</NavLink>
		</>
	);

	console.log(error)
	return (
		<Disclosure as='nav' className='bg-gray-800'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-0'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 top-1 right-3 flex items-center sm:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
                                        <div> X </div>
									) : (
                                        <img src="/hamburger.png" className="w-7 h-7 rounded pr-0" />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center justify-between sm:items-stretch sm:justify-start'>
								<div className='flex justify-between w-100'>
								   <div className='flex flex-shrink-0 items-center rounded w-13 h-9'>
									 <NavLink href='/' isBanner>
										{isAuthenticated?
										  error?(<></>):
										  loadingF?(
											<><Spinner sm /> </>
										  ):
										    profile[0].profile_img !== null  ?(
											<>
											  <div className="ml-7">
											  <Image src={profile[0]?.profile_img} alt="profile" width="50" height="50" className="w-10 h-10 bg-gray-200 border-2 border-gray-300 rounded-full" />
											  </div>
											  <p className="ml-0">{`${user?.first_name} ${user?.last_name}`|| <Spinner sm />}</p>
											</>
										):
										(
											<div
											htmlFor="imageUpload"
											className="w-10 h-10 bg-gray-200 border-2 border-gray-300 rounded-full"
										></div>
										):
										(
											<Image
											src="/MedAidlogo.png"
											width={50}
											height={50}
											alt="background"
											className="w-10 h-10 bg-gray-200 border-2 border-gray-300 rounded-full"
										/>
										)}
									 </NavLink>
								  </div>
								  {/* <div className='flex flex-shrink-0 items-center w-13 h-9 bg-[#95CBD3]'>
									 <NavLink href='/' isBanner>
										<Image
											src="/MedAidlogo.png"
											width={60}
											height={60}
											alt="background"
										// 	className="flex m-auto "
										/>
									 </NavLink>
								  </div> */}
								</div>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-4'>
										{isAuthenticated
											? authLinks(false)
											: guestLinks(false)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-3'>
							{isAuthenticated
								? authLinks(true)
								: guestLinks(true)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}