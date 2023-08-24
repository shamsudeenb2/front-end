'use client';

import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import  NavLink  from '@/components/common/NavLink';

export default function Navbar() {
	const pathname = usePathname();
	const dispatch = useAppDispatch();
	const router = useRouter();

	const [logout] = useLogoutMutation();

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

	return (
		<Disclosure as='nav' className='bg-gray-800'>
			{({ open }) => (
				<>
					<div className=' max-w-full px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 top-3 right-0 flex items-center sm:hidden'>
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
								   <div className='flex flex-shrink-0 items-center rounded w-13 h-9 bg-[#95CBD3]'>
									 <NavLink href='/' isBanner>
										<Image
											src="/MedAidlogo.png"
											width={60}
											height={60}
											alt="background"
										/>
									 </NavLink>
								  </div>
								  <div className='flex flex-shrink-0 items-center w-13 h-9 bg-[#95CBD3]'>
									 <NavLink href='/' isBanner>
										<Image
											src="/MedAidlogo.png"
											width={60}
											height={60}
											alt="background"
										// 	className="flex m-auto "
										/>
									 </NavLink>
								  </div>
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