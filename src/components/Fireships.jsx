import React from 'react'

const fireships = [
	{
		id: 1,
		name: 'Srijeet Prasad Banerjee',
		// position: 'AIML Associate',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQHTL4K1trLXQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720012800058?e=1748476800&v=beta&t=ivs5cpd7MDavqi5s54i3L2aOceEsAS5Vs8NdZSBAf_A'
	},
	{
		id: 2,
		name: 'Priyanshu Saha',
		// position: 'Web Dev Associate',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQFp6WCkHrz8NA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727707820475?e=1748476800&v=beta&t=6-wnKzc5TxCy_ycqlxgydSbjTc4yl0yzd9j4asgzSgk'
	}
]

const Fireships = () => {
	return (
		<div className='p-6'>
			<div className='mb-8 text-center text-white'>
				<h1 className='text-5xl font-bold text-blue-700'>The Fireship Project</h1>
				<div class="flex justify-center items-center p-5">
					<svg fill='#EB844E' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60" height="60">
						<title>Fireship</title>
						<path d="M9.245.05c-.042-.035-.14-.035-.22-.05-.041.06-.098.113-.113.166a3.114 3.114 0 0 0-.064.416 15.42 15.42 0 0 1-3.742 8.693c-1.258 1.474-2.51 2.982-3.44 4.585-2.293 3.972-.249 8.031 4.763 9.804.163.06.348.087.76.181-1.701-1.534-2.57-3.1-2.28-4.944.284-1.765 1.172-3.337 2.525-4.77a1.043 1.043 0 0 1 .099.549c-.068 1.572.453 2.96 2.063 4.055.741.507 1.41 1.081 2.079 1.644.684.57.884 1.263.688 2.015-.09.366-.227.725-.378 1.171 1.145-.11 2.203-.264 2.914-.9.68-.604 1.183-1.322 1.909-2.154.049.707.15 1.255.113 1.8-.045.566-.22 1.126-.336 1.689 3.477-.525 6.546-3.934 6.682-7.427.098-2.543-2.071-6.274-3.893-6.637l.302.688c.631 1.391.817 2.8.416 4.256-.4 1.448-2.426 3.073-4.214 3.277.06-.144.087-.28.17-.39 1.927-2.596 1.946-5.31.854-8.084C15.44 5.98 12.632 2.88 9.245.053Z" />
					</svg>
				</div>
				<p className='mt-2 py-16 sm:px-40 text-sm sm:text-2xl text-white tracking-wide'>
					The Fireship Project was developed to keep a check of young enthusiasts specifically from First Year who over time developed a good knowledge of the World of Technology. They proved interest and learning needs no time.
				</p>
			</div>
			<h1 className='text-5xl font-bold text-blue-700 text-center pb-10'>Fireships of 2025</h1>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
				{fireships.map((member, index) => {
					let borderColor = 'border-orange-400'
					return (
						<div key={member.id} className='flex flex-col items-center p-4 bg-zinc-900 rounded-xl shadow-md'>
							<img
								src={member.img}
								alt={member.name}
								className={`w-24 h-24 rounded-full object-cover border-4 ${borderColor}`}
							/>
							<h2 className='mt-3 text-[10px] sm:text-lg font-semibold'>{member.name}</h2>
							<p className='text-[8px] sm:text-sm font-medium text-white'>{member.position}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Fireships

