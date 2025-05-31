import React from 'react'

const teamMembers = [
	{
		id: 1,
		name: 'Kunal Singh',
		department: 'Batch of 2018',
		img: 'https://media.licdn.com/dms/image/v2/C5103AQGibG3NvPNGhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1583780643273?e=1753920000&v=beta&t=kJHimWjEVghwi_DGpEQKwctCcc8-ZWDKBeNWP9EwfTs',
		company: 'Innoraft',
		companyLogo: 'https://media.licdn.com/dms/image/v2/C560BAQEkzAo0Rox1KQ/company-logo_200_200/company-logo_200_200/0/1631315026179?e=1753920000&v=beta&t=laY4-QIZcH0fEsA4SQvWQH4TRjqzcHl14E6h2dX5TfQ'
	},
	// {
	//     id: 2,
	//     name: 'Faraz Ali',
	//     department: 'Batch of 2021',
	//     img: 'https://media.licdn.com/dms/image/v2/C4E03AQEKLTw2ANmU6A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609344732814?e=1747872000&v=beta&t=BsgzAE3vLn8Fgd4NkIf9iGym9GNWGiK_dnjQ0DsB9bM',
	// },
	{
		id: 3,
		name: 'Saswata Mukhopadhyay',
		department: 'Batch of 2021',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQF5WnveiRQnmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688663275546?e=1753920000&v=beta&t=lE8-zJfObhoec3QEh8yyVffWu7PbawZdiljG_2kB0k4',
		company: 'TCS iON',
		companyLogo: 'https://media.licdn.com/dms/image/v2/D560BAQEanBut48aicA/company-logo_200_200/company-logo_200_200/0/1709721341282/tcs_ion_logo?e=1753920000&v=beta&t=i8xUYr4gakeEnL5rRn1DHOt6X5HoImyjS3o2RkzJ0xk'
	},
	{
		id: 4,
		name: 'Prithviraj Biswas',
		department: 'Batch of 2022',
		img: 'https://media.licdn.com/dms/image/v2/D5635AQFfpLDEOFiyiQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1713251454161?e=1749333600&v=beta&t=X0c3kp0eqyrD-m7_pXhpiXsh1wcyzXD7btsQOhlY1is',
		company: 'Accenture',
		companyLogo: 'https://media.licdn.com/dms/image/v2/D560BAQHCNiZ7blKfhA/company-logo_200_200/B56ZcfITMHG0AI-/0/1748573962960/accentureindia_logo?e=1753920000&v=beta&t=XLrN7dnLcXTmsY67h6i2FnAb75opZdFiOe2mLxWgRRQ'
	},
	{
		id: 5,
		name: 'Abir Ganguly',
		department: 'Batch of 2024',
		img: 'https://media.licdn.com/dms/image/v2/D4D03AQGnftXQE4reyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727411652299?e=1753920000&v=beta&t=M5wcRQaaEsmUmqYspX9wtyPAplM4csa7Y53x8qN4Km4',
		company: 'Accenture',
		companyLogo: 'https://media.licdn.com/dms/image/v2/D560BAQHBaq4KbfWSmQ/company-logo_200_200/B56Zcd2K6nGoAM-/0/1748552430276/accenture_logo?e=1753920000&v=beta&t=8a11o75gyvAzxQOTd2w_yVuusshrhSqGSEB-CzBubGo'
	},
	{
		id: 6,
		name: 'Adarsh Pandey',
		department: 'Batch of 2024',
		img: 'https://media.licdn.com/dms/image/v2/D4D03AQEprs86gCZlIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715879857986?e=1753920000&v=beta&t=gLUer2z2sJseg2Jk5IvtKKHi6Y2c9InYINekf4piZOo',
		company: 'Index Engines',
		companyLogo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGnCehqU4sqLg/company-logo_200_200/company-logo_200_200/0/1733865814789/index_engines_logo?e=1753920000&v=beta&t=HCi_SqflWtZD-NIiusU3D07w9jK6QBYTOftsn8KKmcM'
	},
	{
		id: 7,
		name: 'Rajib Lochan Nandi',
		department: 'Batch of 2024',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQGDDW_42M_XjQ/profile-displayphoto-shrink_400_400/B56ZRrjxKPHsAo-/0/1736971327175?e=1753920000&v=beta&t=2_ZEh3r7nmKdbhY5wOpSV8RRAkNIbFnDtbI6fyoll-E',
		company: 'TCS',
		companyLogo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGsGR9p4ikS5w/company-logo_200_200/company-logo_200_200/0/1708946550425/tata_consultancy_services_logo?e=1753920000&v=beta&t=UAR0nLItiOChSECrJoHrPKZmkzLTZnChbKZbnSVK8sM'
	},
	// {
	//     id: 8,
	//     name: 'Arnab Das',
	//     department: 'Batch of 2025',
	//     img: 'https://media.licdn.com/dms/image/v2/D5635AQFT54uiuQb7gg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730222896998?e=1742986800&v=beta&t=AHUICTluK4R3hhLB7qZwp1FiRgzN1mO0NxRlMgNGgp4'
	// },
	{
		id: 9,
		name: 'Ishanjit Mukhopadhyay',
		department: 'Batch of 2025',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQFw4Zsd__CKaw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722106951643?e=1753920000&v=beta&t=DVBpbSmuHaDvHOrB8U7EWUWJOcwhZzNwYG0bpUKyCJ0',
		company: 'Accenture',
		companyLogo: 'https://media.licdn.com/dms/image/v2/D560BAQHBaq4KbfWSmQ/company-logo_200_200/B56Zcd2K6nGoAM-/0/1748552430276/accenture_logo?e=1753920000&v=beta&t=8a11o75gyvAzxQOTd2w_yVuusshrhSqGSEB-CzBubGo'
	},
	// {
	//     id: 10,
	//     name: 'Rajarshi Bhattacharya',
	//     department: 'Batch of 2025',
	//     img: 'https://media.licdn.com/dms/image/v2/D5635AQEXASlbAK3Z5Q/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736006384895?e=1742986800&v=beta&t=NPM9yrc2WhOKqCRxxgMU3O1o6isuhabBvd9rKVn8xak'
	// }
]

const Advisors = () => {
	return (
		<div className='p-6'>
			<div className='mb-8 text-center text-white'>
				<h1 className='text-5xl font-bold text-blue-700'>Hall of Fame</h1>
				<p className='mt-2 py-16 sm:px-40 text-sm sm:text-2xl text-white tracking-wide'>
					The Advisors of Bit-2-Byte have been the guiding force behind the community and shaping the vision. Without them the Bit-2-Byte community would have never been successful in achieving its vision. 
				</p>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
				{teamMembers.map((member, index) => {
					let borderColor = 'border-gray-300'
					return (
						<div key={member.id} className='flex flex-col items-center p-4 bg-zinc-900 rounded-xl shadow-md'>
							<img
								src={member.img}
								alt={member.name}
								className={`w-24 h-24 rounded-full object-cover border-4 ${borderColor}`}
							/>
							<h2 className='mt-3 text-[10px] sm:text-lg font-semibold'>{member.name}</h2>
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

export default Advisors
