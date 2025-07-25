import React from 'react'

const teamMembers = [
	{
		id: 1,
		name: 'Prof. Swarup Kumar Mitra',
		department: 'Principal',
		img: 'https://media.licdn.com/dms/image/v2/C5103AQFavRPZHUjWLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1561011567550?e=1753920000&v=beta&t=r48DcS4Ng95CtLM9dNGJ73w5PWtbeyILlm9WFGRxYBw',
		company: 'GNIT',
		companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGVdTueWoZ0Eg/company-logo_200_200/company-logo_200_200/0/1660843902959?e=1753920000&v=beta&t=ekl5hpuLfWztpBfc5HYnyOvH7zd_DdcPYsFzPdZy6os'
	},
	{
		id: 2,
		name: 'Mr. Binit Kumar Mondal',
		department: 'Co Organiser',
		img: 'https://media.licdn.com/dms/image/v2/D4D03AQGO82wODOd0FA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669284246602?e=1753920000&v=beta&t=lLveffXR3b-wCGiFqVhKZv6D1t9v1Fos_9xNRx4optY',
		company: 'GDG Kolkata',
		companyLogo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEzvgRTaofPqg/company-logo_200_200/company-logo_200_200/0/1665876132735?e=1753920000&v=beta&t=hciVs4NAQJw-GLPYl9W2n06-FlbpsPr_6M2uYJIMdYA'
	}
]

const Endorsement = () => {
	return (
		<div className='p-6'>
			<div className='mb-8 text-center text-white'>
				<h1 className='text-5xl font-bold text-blue-700'>Endorsements</h1>
				<p className='mt-2 py-16 sm:px-40 text-sm sm:text-2xl text-white tracking-wide'>
					Bit-2-Byte is not just any club that came out of the blue and started doind random things. We are a group of efficient and visionaries that has been proved by the Personalities in Tech who have endorsed us and our community.
				</p>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
				{teamMembers.map((member, index) => {
					let borderColor = 'border-yellow-500'
					return (
						<div key={member.id} className='flex flex-col items-center p-4 bg-zinc-900 rounded-xl shadow-md'>
							<img
								src={member.img}
								alt={member.name}
								className={`w-24 h-24 rounded-full object-cover border-4 ${borderColor}`}
							/>
							<h2 className='mt-3 text-[9px] sm:text-lg font-semibold'>{member.name}</h2>
							<p className='text-[8px] sm:text-sm font-medium text-white'>{member.department}</p>
							<div className='flex items-center gap-2 mt-2'>
								<img
									src={member.companyLogo}
									alt={member.company}
									className='w-6 h-6 sm:w-8 sm:h-8 object-contain'
								/>
								<p className='text-[10px] sm:text-sm font-medium text-gray-400'>
									{member.company}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Endorsement
