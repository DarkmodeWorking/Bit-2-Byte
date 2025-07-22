import React from 'react'

const teamMembers = [
	{
		id: 1,
		name: 'Anurag Bhattacharjee',
		department: 'CSE 3rd Year',
		position: 'PRIME - Executions',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQGr4l5MLQvGeA/profile-displayphoto-scale_200_200/B56ZgvCyT.HUAc-/0/1753135917869?e=1756339200&v=beta&t=vDCdl0Tea9nT9Pzv48RIFfbt-1upymNbgUJ7m1fGiyA',
	},
	{
		id: 2,
		name: 'Nanda Lal Das',
		department: 'CSE 3rd Year',
		position: 'PRIME - Operations',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQGZ9ZVNKzRXvg/profile-displayphoto-shrink_400_400/B56ZShRvcsGUAg-/0/1737872571533?e=1753920000&v=beta&t=pw8Krutp1JfdMJAOjqsXakoLa7zkZD5kIg5lMi0IRx4',
	},
	{
		id: 3,
		name: 'Sandip Dey',
		department: 'CSE 3rd Year',
		position: 'ADMIN - Social Media',
		img: 'https://media.licdn.com/dms/image/v2/D5635AQGzDbt2XIE5pA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728008149141?e=1743796800&v=beta&t=UPRCL-kI0JIOjNvpqJszNLQ65MTNoIPVlj-ATGb1c6c',
	},
	{
		id: 4,
		name: 'Aniket Das',
		department: 'CSE 3rd Year',
		position: 'ADMIN - Events',
		img: 'https://media.licdn.com/dms/image/v2/D4D35AQHjKkZV9AfIOg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1729068796110?e=1743796800&v=beta&t=DfzwHSyePLy4q_Y0rTOjM27SYm23tHTjjDL4hM1hbik',
	},
	{
		id: 5,
		name: 'Zishan Khan Chowdhury',
		department: 'CSE 3rd Year',
		position: 'ADMIN - Public Relations',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQG-SjfhVwuWag/profile-displayphoto-shrink_400_400/B56Zbyy.reGgAg-/0/1747830179535?e=1753920000&v=beta&t=yE_ir50xYBXIVhFpAX5E7P6u1u3QxaA4CSk49VofFuI'
	},
	{
		id: 6,
		name: 'Ujjal Bhattacharya',
		department: 'IT 3rd Year',
		position: 'ADMIN - Development',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQFyQAt1U9psqw/profile-displayphoto-shrink_400_400/B56ZWYtwnOGQAg-/0/1742023888542?e=1753920000&v=beta&t=SsgdC1XkSjTpCu9EAcRJUqLArfbuJLLN_ENvYKAaMpk'
	},
	{
		id: 7,
		name: 'Kaushik Kundu',
		department: 'CSE 3rd Year',
		position: 'DEV TEAM - Lead',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQHu0kCIyLM2aA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706337232177?e=1753920000&v=beta&t=Rvf2tlcZgqtn5uURYF0XKerpjnQp9ERM-0O-aF2_8X0'
	},
	{
		id: 8,
		name: 'Raj Kumar Singh',
		department: 'CSE 3rd Year',
		position: 'ZONE LEAD - Cloud & CP',
		img: 'https://media.licdn.com/dms/image/v2/D4D03AQGTSadTE2x4Lg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696411025276?e=1753920000&v=beta&t=BxKCuPbDeaW894Ec9Lrdz__aZ0uvOr6Q8aPtmZMiM60'
	},
	{
		id: 9,
		name: 'Diprit Turul',
		department: 'CSE 3rd Year',
		position: 'ZONE LEAD - Cyber ',
		img: 'https://media.licdn.com/dms/image/v2/D4E03AQFyYqwY6ua4LQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729180547223?e=1753920000&v=beta&t=uXOTEQynBnzFLBsrmPPDgP-SpnPiVul0MXZSlwIe6aM'
	},

	{
		id: 10,
		name: 'Nilagrib Ray',
		department: 'CSE 3rd Year',
		position: 'ZONE LEAD - App',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQEk8fzosynUpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731150662252?e=1753920000&v=beta&t=QCfsaUW8_p4ZnHpC-LBMEcfwDdmnKf_Nux5QLtEYgLI'
	},
	{
		id: 11,
		name: 'Sudipta Sen',
		department: 'CSE 3rd Year',
		position: 'ZONE LEAD - AI/ML',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQEFwBTjwhIa2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670473804351?e=1753920000&v=beta&t=kn33Bcg3FNb-yxHm3K2LTmASorYujIMU9hUqudUhU5U'
	},

	{
		id: 12,
		name: 'Mukta Das',
		department: 'CSE 3rd Year',
		position: 'ZONE LEAD - Web',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQF4aiZBury7hQ/profile-displayphoto-shrink_400_400/B56ZNkoqfAGwAg-/0/1732560202752?e=1753920000&v=beta&t=69RbClbc-kSNNJ8XC3uSIjCboSqAWPCsPbGdU6qk51A'
	},
	{
		id: 13,
		name: 'Soubhagya Das',
		department: 'CSE 3rd Year',
		position: 'ZONE LEAD - Web 3.0',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQF-8bj6RjyNMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726592805561?e=1753920000&v=beta&t=fFZJxYHQTERIwuUcfH-U_e9EqQWcChiA4-qvZA4VdGY'
	},
	{
		id: 14,
		name: 'Aiswariya Das',
		department: 'CSE 3rd Year',
		position: 'HEAD - Social Handles',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQGRN9BuTBTkgA/profile-displayphoto-shrink_400_400/B56ZUPqZSQHEAg-/0/1739724527204?e=1753920000&v=beta&t=2QNxyJRmOk3r0JXw9OQfoKg9ZSXF6lslDJ0d_hmVmmo'
	},
	{
		id: 15,
		name: 'Srijon Deyasin',
		department: 'CSE 3rd Year',
		position: 'HEAD - Presentations',
		img: 'https://media.licdn.com/dms/image/v2/D4E03AQFYUFaj9zCSzQ/profile-displayphoto-shrink_400_400/B4EZT66nkiGgAk-/0/1739376458840?e=1753920000&v=beta&t=R4aT0MWsh0xLJGr7bHv9R4wjQeZSWCQwGNnLmp_haMI'
	},
	{
		id: 16,
		name: 'Unnati Narayan',
		department: 'CSE 3rd Year',
		position: 'HEAD - Videography',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQGCbD0ca7ZYJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706810391948?e=1753920000&v=beta&t=HlRUG9dt9sXYtMpJ9UYShoObrC_U-rPZ161k7NGLz8c'
	},
	{
		id: 17,
		name: 'Abir Mitra',
		position: 'SPOC',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQFY3HeUgwK-XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709358117355?e=1753920000&v=beta&t=BiYoMrr2XZE_VPNJgdhj2s938H_PuzE-tnP1qtpYZk8'
	},
	{
		id: 18,
		name: 'Jeshmita Chatterjee',
		position: 'SPOC',
		img: 'https://media.licdn.com/dms/image/v2/D4D35AQHKJXHIF0J-yg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1722066237167?e=1743796800&v=beta&t=sQ_W8nS0dkMGTac5_mZ5npWBSey0Fa2oXGv1fnIyFtY'
	},
	{
		id: 19,
		name: 'Ujan Ghosh',
		position: 'Cyber Club Associate',
		img: 'https://media.licdn.com/dms/image/v2/D5603AQEbIAtxljAV9Q/profile-displayphoto-shrink_400_400/B56Zb71j_3HUAo-/0/1747981846121?e=1753920000&v=beta&t=dG9hzAN5pJLCbPWrtjv-C_GaJxf-wAC5vQ2cL9R5zoc'
	}
]

const TeamA = () => {
	return (
		<div className='p-6'>
			<div className='mb-8 text-center text-white'>
				<h1 className='text-5xl font-bold text-blue-700'>Team of 2024</h1>
				<p className='mt-2 py-16 sm:px-40 text-sm sm:text-2xl text-white tracking-wide'>
					The Team of 2024 played a crucial role in reviving the Bit-2-Byte coding community, bringing together passionate developers, designers, and tech enthusiasts to create a space for learning, collaboration, and innovation.
					After a brief period of inactivity, this team reignited the spirit of Bit-2-Byte by organizing coding workshops and mentorship programs.
				</p>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
				{teamMembers.map((member, index) => {
					let borderColor = 'border-gray-300'
					if (index < 2) borderColor = 'border-cyan-500'
					else if (index >= 2 && index < 6) borderColor = 'border-orange-500'
					else if (index >= 6 && index < 7) borderColor = 'border-red-500'
					else if (index >= 7 && index < 13) borderColor = 'border-blue-500'
					else if (index >= 13 && index < 16) borderColor = 'border-purple-500'
					else if (index >= 16 && index < 18) borderColor = 'border-green-500'
					else borderColor = 'border-white'
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

export default TeamA

