import React from "react";

const teamMembers = [
	{
		id: 1,
		name: "Anurag Bhattacharjee",
		department: "CSE 3rd Year",
		position: "PRIME - Executions",
		img: "https://media.licdn.com/dms/image/v2/D5603AQEcbWdlHkDA1g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724012812652?e=1747872000&v=beta&t=3wElvIjHR_frK0op6VUWp0T9XjB-D3dNw3_DUZsA7wA",
	},
	{
		id: 2,
		name: "Nanda Lal Das",
		department: "CSE 3rd Year",
		position: "PRIME - Operations",
		img: "https://media.licdn.com/dms/image/v2/D5603AQGZ9ZVNKzRXvg/profile-displayphoto-shrink_800_800/B56ZShRvcsGUAc-/0/1737872571533?e=1747872000&v=beta&t=vJRdJbiGnkfrWMD8ehYmysx38OlUwzzV0bSol9ztI80",
	},
	{
		id: 3,
		name: "Sandip Dey",
		department: "CSE 3rd Year",
		position: "ADMIN - Social Media",
		img: "https://media.licdn.com/dms/image/v2/D5635AQGzDbt2XIE5pA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1728008149141?e=1742918400&v=beta&t=_mbby-BXyXREBE5CaytXC57OMUsFwx_09I6Pw4s6Oo8",
	},
	{
		id: 4,
		name: "Aniket Das",
		department: "CSE 3rd Year",
		position: "ADMIN - Events",
		img: "https://media.licdn.com/dms/image/v2/D4D35AQHjKkZV9AfIOg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1729068796110?e=1742918400&v=beta&t=WTYoFZkjLQy1fB2W2WlXV6KPklsOcfIxDWywQK2CKaE",
	},
	{
		id: 5,
		name: 'Zishan Khan Chowdhury',
		department: "CSE 3rd Year",
		position: "ADMIN - Public Relations",
		img: "https://media.licdn.com/dms/image/v2/D5603AQE4h9isLASABg/profile-displayphoto-shrink_800_800/B56ZS3eECsGoAc-/0/1738244900212?e=1747872000&v=beta&t=Wn8wYC6LtNbu3jf6XMkQS2RX9FZ93mUYwR5B4C7mNnQ"
	},
	{
		id: 6,
		name: "Ujjal Bhattacharya",
		department: "IT 3rd Year",
		position: "ADMIN - Development",
		img: "https://media.licdn.com/dms/image/v2/D5603AQFyQAt1U9psqw/profile-displayphoto-shrink_400_400/B56ZWYtwnOGQAg-/0/1742023888542?e=1747872000&v=beta&t=p_Scsv5WvFcWJ9nys4FxMoR336u0qCUsnzq1fKaKNWY"
	},
	{
		id: 7,
		name: 'Kaushik Kundu',
		department: 'CSE 3rd Year',
		position: "DEV TEAM - Lead",
		img: "https://media.licdn.com/dms/image/v2/D5603AQHu0kCIyLM2aA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706337232177?e=1747872000&v=beta&t=_GQJ0194adtGRdiBAjhhQ5LhWskb1toa2rqbtnCYIIM"
	},
	{
		id: 8,
		name: 'Sudipta Sen',
		department: 'CSE 3rd Year',
		position: "DEV TEAM - Co Lead",
		img: "https://media.licdn.com/dms/image/v2/D5603AQEFwBTjwhIa2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670473804351?e=1747872000&v=beta&t=AGxhF-23ISkal4DeCjCXxMWmj6Yey5Ug_59LGE20SUw"
	},
	{
		id: 9,
		name: "Mukta Das",
		department: "CSE 3rd Year",
		position: "ZONE LEAD - Web",
		img: "https://media.licdn.com/dms/image/v2/D5603AQF4aiZBury7hQ/profile-displayphoto-shrink_800_800/B56ZNkoqfAGwAc-/0/1732560202752?e=1747872000&v=beta&t=7ey8RzLImK7SSEhGzHvzIVhjqkiO1bWm6_7sXJHFOTw"
	},
	{
		id: 10,
		name: "Nilagrib Ray",
		department: "CSE 3rd Year",
		position: "ZONE LEAD - App",
		img: "https://media.licdn.com/dms/image/v2/D5603AQEk8fzosynUpQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731150662270?e=1747872000&v=beta&t=rnhObP5YGoiJ9QITygx41RYha_kA-Gab5CmYiWil1dU"
	},
	{
		id: 11,
		name: "Raj Kumar Singh",
		department: "CSE 3rd Year",
		position: "ZONE LEAD - Cloud",
		img: "https://media.licdn.com/dms/image/v2/D4D03AQGTSadTE2x4Lg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696411025276?e=1747872000&v=beta&t=mTzYw7gRVQ14OPWPCf5wsNdwvw81ZOD-UMdk0gEjQ6w"
	},
	{
		id: 12,
		name: "Soubhagya Das",
		department: "CSE 3rd Year",
		position: "ZONE LEAD - Web 3.0",
		img: "https://media.licdn.com/dms/image/v2/D5603AQF-8bj6RjyNMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726592805581?e=1747872000&v=beta&t=_8I-cEODnO1Mx8MGmFW6UAB3G6HP8nq8k07Mb9EmxlY"
	},
	{
		id: 13,
		name: "Diprit Turul",
		department: "CSE 3rd Year",
		position: "ZONE LEAD - Cyber ",
		img: "https://media.licdn.com/dms/image/v2/D4E03AQFyYqwY6ua4LQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729180547241?e=1747872000&v=beta&t=AziItol1iLdM2q4DOQDd7tWrrYjbjaC6ZAyxz5faM5k"
	},
	{
		id: 14,
		name: "Aiswariya Das",
		department: "CSE 3rd Year",
		position: "HEAD - Social Posts",
		img: "https://media.licdn.com/dms/image/v2/D5603AQGRN9BuTBTkgA/profile-displayphoto-shrink_800_800/B56ZUPqZSQHEAc-/0/1739724527228?e=1747872000&v=beta&t=QeeGl2D0-0qeG98eGNAshIDRgbeoo0jGulfsfqrfM7g"
	},
	{
		id: 15,
		name: "Srijon Deyasin",
		department: "CSE 3rd Year",
		position: "HEAD - Presentations",
		img: "https://media.licdn.com/dms/image/v2/D4E03AQFYUFaj9zCSzQ/profile-displayphoto-shrink_400_400/B4EZT66nkiGgAk-/0/1739376458840?e=1747872000&v=beta&t=5cTSV1U7Jrd-sQhBFmD2mj-deMZOoB09cAwlcs3Q_1I"
	},
	{
		id: 16,
		name: "Unnati Narayan",
		department: "CSE 3rd Year",
		position: "HEAD - Content Making",
		img: "https://media.licdn.com/dms/image/v2/D5603AQGCbD0ca7ZYJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706810391948?e=1747872000&v=beta&t=NlKXRHlDG_19AoNkS3iksPKhPw-BbQ65OWuvApBhLg4"
	}
];

const TeamA = () => {
	return (
		<div className="p-6">
			{/* Team Introduction */}
			<div className="mb-8 text-center text-white">
				<h1 className="text-5xl font-bold text-indigo-500">Team of 2025</h1>
				<p className="mt-2 p-20 text-xl text-white tracking-wide">
					The Team of 2025 played a crucial role in reviving the Bit 2 Byte coding community, bringing together passionate developers, designers, and tech enthusiasts to create a space for learning, collaboration, and innovation.
					<br /><br />
					After a brief period of inactivity, this team reignited the spirit of Bit 2 Byte by organizing coding workshops, hackathons, open-source projects, and mentorship programs. Their efforts helped build a strong network of aspiring programmers and tech leaders, making the community more active and impactful than ever.
					<br /><br />
					With a vision to empower students and professionals in software development, AI, and web technologies, the Team of 2025 ensured that Bit 2 Byte became a thriving hub for knowledge-sharing and growth in the tech world.
				</p>

			</div>

			{/* Team Members Grid */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{teamMembers.map((member, index) => {
					let borderColor = "border-gray-300";

					if (index < 2) borderColor = "border-cyan-500";
					else if (index >= 2 && index < 6) borderColor = "border-orange-500";
					else if (index >= 6 && index < 8) borderColor = "border-red-500";
					else if (index >= 8 && index < 13) borderColor = "border-indigo-500";
					else if (index >= 13) borderColor = "border-purple-500";

					return (
						<div key={member.id} className="flex flex-col items-center p-4 bg-zinc-900 rounded-xl shadow-md">
							<img
								src={member.img}
								alt={member.name}
								className={`w-24 h-24 rounded-full object-cover border-4 ${borderColor}`}
							/>
							<h2 className="mt-3 text-lg font-semibold">{member.name}</h2>
							{/* <p className="text-sm text-gray-600">{member.department}</p> */}
							<p className="text-sm font-medium text-white">{member.position}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TeamA;

