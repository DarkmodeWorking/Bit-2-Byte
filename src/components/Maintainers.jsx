import React from 'react'

const teamMembers = [
	{
		id: 1,
		name: 'Anurag Bhattacharjee',
		department: 'aka UserFromTheGrid',
		img: 'https://avatars.githubusercontent.com/u/185953875?v=4',
		url: 'https://github.com/DarkmodeWorking'
	},
	{
		id: 2,
		name: 'Kaushik Kundu',
		department: 'aka StrawHatPirate',
		img: 'https://avatars.githubusercontent.com/u/105000989?v=4',
		url: 'https://github.com/kaushikkundu'
	},
]

const Maintainers = () => {
	return (
		<div className='p-6'>
			<div className='mb-8 text-center text-white'>
				<h1 className='text-5xl font-bold text-blue-700'>Join the Website Maintainers</h1>
				<p className='mt-2 py-16 sm:px-40 text-sm sm:text-2xl text-white tracking-wide'>
					Join the group of lazy maintainers of the official Bit-2-Byte Website. Join the team or create pull requests worthy of the website.
				</p>
				<a href='https://github.com/DarkmodeWorking/Bit-2-Byte' target='_blank' rel='noopener noreferrer'>
					<button className='my-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-lg font-semibold rounded-lg shadow-md'>
						CLICK HERE AND STAR THE REPO
					</button>
				</a>
			</div>
			<div className='flex justify-center'>

				<div className='grid md:grid-cols-2 gap-4 sm:gap-6'>
					{teamMembers.map((member, index) => {
						return (
							<div
								key={member.id}
								className="relative group flex flex-col items-center p-4 rounded-xl shadow-md cursor-pointer border-transparent border-2 transition-all duration-300 hover:scale-105"
								onClick={() => window.open(member.url, '_blank')}
							>
								<div className="absolute inset-0 -z-10 rounded-xl bg-cyan-400/50 blur-3xl scale-110 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
								<div className="w-full relative flex flex-col items-center p-4 rounded-xl bg-zinc-900 cursor-pointer border-cyan-400 border-2">
									<img
										src={member.img}
										alt={member.name}
										className="w-24 h-24 rounded-full object-cover border-4 border-violet-400"
									/>
									<h2 className="mt-3 text-[11px] sm:text-lg font-semibold">{member.name}</h2>
									<p className="text-[10px] sm:text-sm font-medium text-gray-400">{member.department}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Maintainers
