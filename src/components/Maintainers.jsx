import React from 'react'

const teamMembers = [
	{
		id: 1,
		name: 'Anurag Bhattacharjee',
		department: 'aka DarkShadow',
		img: 'https://avatars.githubusercontent.com/u/185953875?v=4'
	},
	{
		id: 2,
		name: 'Kaushik Kundu',
		department: 'aka StrawHatPirate',
		img: 'https://avatars.githubusercontent.com/u/105000989?v=4'
	}
]

const Maintainers = () => {
	return (
		<div className='p-6'>
			<div className='mb-8 text-center text-white'>
				<h1 className='text-5xl font-bold text-indigo-500'>Join the Website Maintainers</h1>
				<p className='mt-2 py-16 sm:px-40 text-sm sm:text-2xl text-white tracking-wide'>
					Join the group of lazy maintainers of the official Bit-2-Byte Website. Join the team or create pull requests worthy of the website.
				</p>
				<a href='https://github.com/your-repo-link' target='_blank' rel='noopener noreferrer'>
					<button className='my-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-lg font-semibold rounded-lg shadow-md'>
						CLICK HERE AND STAR THE REPO
					</button>
				</a>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
				{teamMembers.map((member, index) => {
					return (
						<div key={member.id} className='flex flex-col items-center p-4 bg-zinc-900 rounded-xl shadow-md'>
							<img
								src={member.img}
								alt={member.name}
								className='w-24 h-24 rounded-full object-cover border-4 border-violet-500'
							/>
							<h2 className='mt-3 text-[11px] sm:text-lg font-semibold'>{member.name}</h2>
							<p className='text-[10px] sm:text-sm font-medium text-gray-400'>{member.department}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Maintainers