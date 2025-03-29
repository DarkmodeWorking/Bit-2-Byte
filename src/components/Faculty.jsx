import React from 'react'

const teamMembers = [
	{
		id: 1,
		name: 'Dr. Mahamuda Sultana',
		department: 'Dept. of Computer Science Engineering (CSE)',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQG67AibWRr7Lg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714373474088?e=1747872000&v=beta&t=IZZsSf_wrl0OsZ5Cq4mpPCMSv0Ue0wNaVMybJnYV62E'
	},
	{
		id: 2,
		name: 'Mr. Tridib Chakraborty',
		department: 'Dept. of Information Technology (IT)',
		img: 'https://media.licdn.com/dms/image/v2/D4D03AQF7oL4rSI3LuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1674567537767?e=1747872000&v=beta&t=Szxo0mStm338VpNOKpk3siWrRHdEAt5PqdVcOMQyQ-k',
	}
]

const Faculty = () => {
	return (
		<div className='p-6'>
			<div className='mb-8 text-center text-white'>
				<h1 className='text-5xl font-bold text-blue-700'>Faculty <br /> Co-ordinators</h1>
				<p className='mt-2 py-16 sm:px-40 text-sm sm:text-2xl text-white tracking-wide'>
					The Faculty Co-ordinators of Bit-2-Byte has been very helpful to us be it decision making, event permissions or helping us out in times of crisis. Without them our vision for community development would not have been possible.
				</p>
			</div>
			<div className='grid sm:grid-cols-2 gap-6'>
				{teamMembers.map((member, index) => {
					let borderColor = 'border-indigo-500'
					return (
						<div key={member.id} className='flex flex-col items-center p-4 bg-zinc-900 rounded-xl shadow-md'>
							<img
								src={member.img}
								alt={member.name}
								className={`w-24 h-24 rounded-full object-cover border-4 ${borderColor}`}
							/>
							<h2 className='mt-3 text-lg font-semibold'>{member.name}</h2>
							<p className='text-xs font-medium text-white'>{member.department}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Faculty

