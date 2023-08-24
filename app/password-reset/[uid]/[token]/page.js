import  PasswordResetConfirmForm  from '@/components/forms/PasswordResetConfirmForm';

export const metadata = {
	title: 'Full Auth | Password Reset Confirm',
	description: 'Full Auth password reset confirm page',
};

export default function Page({ params: { uid, token } }) {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Reset your password
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<PasswordResetConfirmForm uid={uid} token={token} />
			</div>
		</div>
	);
}