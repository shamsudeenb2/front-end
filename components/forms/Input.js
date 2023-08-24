import Link from 'next/link';


export default function Input({
	labelId,
	type,
	onChange,
	value,
	children,
	link,
	required = false,
}) {
	return (
		<div>
			<div className='flex justify-between align-center'>
				<label
					htmlFor={labelId}
					className='block text-sm font-medium leading-6 text-gray-900'
				>
					{children}
				</label>
				{link && (
					<div className='text-sm'>
						<Link
							className='font-semibold text-indigo-600 hover:text-indigo-500'
							href={link.linkUrl}
						>
							{link.linkText}
						</Link>
					</div>
				)}
			</div>
			<div className='flex flex-col my-2'>
				<input
					id={labelId}
					className='border border-[#E8F3F1] py-3 px-6 rounded-3xl
					focus:outline-none focus:border-sky-500 bg-[#F9FAFB] '
					name={labelId}
					type={type}
					onChange={onChange}
					value={value}
					required={required}
				/>
			</div>
		</div>
	);
}