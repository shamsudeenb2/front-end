'use client';

import { redirect } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import  Spinner  from '@/components/common/Spinner';

// interface Props {
// 	children: React.ReactNode;
// }

export default function RequireAuth({ children }) {
	const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);

	if (isLoading) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

	if (!isAuthenticated) {
		redirect('/auth/signin');
	}

	return <>{children}</>;
}