'use client';

import { ImGoogle, ImFacebook } from 'react-icons/im';
import  SocialButton  from '@/components/common/SocialButton';
import  continueWithGoogle from '@/utils/continueWithSocialAuth';

export default function SocialButtons() {
	return (
		<div className='flex justify-between items-center gap-2 mt-5'>
			<SocialButton provider='google' onClick={continueWithGoogle}>
				<ImGoogle className={`text-extrabold`} /> Google Signin
			</SocialButton>
		</div>
	);
}