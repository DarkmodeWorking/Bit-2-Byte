import React from "react";

const teamMembers = [
    {
        id: 1,
        name: "Kunal Singh",
        department: "Batch of 2018",
        img: "https://media.licdn.com/dms/image/v2/C5103AQGibG3NvPNGhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1583780643273?e=1747872000&v=beta&t=oe15UAuu76uK00cH77q6emDraiLqhiN0TEP6OE5svpk"
    },
    {
        id: 2,
        name: "Faraz Ali",
        department: "Batch of 2021",
        img: "https://media.licdn.com/dms/image/v2/C4E03AQEKLTw2ANmU6A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609344732814?e=1747872000&v=beta&t=BsgzAE3vLn8Fgd4NkIf9iGym9GNWGiK_dnjQ0DsB9bM",
    },
    {
        id: 3,
        name: "Saswata Mukhopadhyay",
        department: "Batch of 2021",
        img: "https://media.licdn.com/dms/image/v2/D5603AQF5WnveiRQnmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688663275546?e=1747872000&v=beta&t=xx0QyJNmpMp4C2Vm5NaRQeKecvURf5xmEn1tr8LoNIU",
    },
    {
        id: 4,
        name: "Abir Ganguly",
        department: "Batch of 2024",
        img: "https://media.licdn.com/dms/image/v2/D4D03AQGnftXQE4reyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727411652299?e=1747872000&v=beta&t=LkJPc2mxe2pPIz4Oou2c19cf12Yriqxs2aJitzatJGA",
    },
    {
        id: 5,
        name: "Adarsh Pandey",
        department: "Batch of 2024",
        img: "https://media.licdn.com/dms/image/v2/D4D03AQEprs86gCZlIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715879857986?e=1747872000&v=beta&t=ljFQgTlLM-PxSofJNjH8ErhnRrsIyMtSudSRAmy4l58",
    },
    {
        id: 6,
        name: "Rajib Lochan Nandi",
        department: "Batch of 2024",
        img: "https://media.licdn.com/dms/image/v2/D5635AQEVg6_97JMp7g/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736971329146?e=1742929200&v=beta&t=JdoGda_nEKmdL0nLh-XhaZ829qfFHbaz15dgg0U2oA0",
    },
    {
        id: 7,
        name: "Ishanjit Mukhyopadhay",
        department: "Batch of 2025",
        img: "https://media.licdn.com/dms/image/v2/D5603AQFw4Zsd__CKaw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722106951643?e=1747872000&v=beta&t=Uohsk98WddxnQhlPcFu1P-yqmAM276lUKHXmfgwu7_E",
    },
];

const Advisors = () => {
    return (
        <div className="p-6">
            {/* Team Introduction */}
            <div className="mb-8 text-center text-white">
                <h1 className="text-5xl font-bold text-indigo-500">Hall of Fame - Advisors</h1>
                <p className="mt-2 p-20 text-xl text-white tracking-wide">
                    The Advisors of Bit-2-Byte have been the guiding force behind the community, shaping its vision, mentoring students, and ensuring its continuous growth. Their dedication and expertise laid the foundation for innovation, collaboration, and excellence in the tech domain.
                    <br /><br />
                    As the pillars of Bit-2-Byte, these esteemed individuals provided invaluable guidance, helping students navigate the ever-evolving world of software development, AI, and emerging technologies. Through their mentorship, they cultivated a culture of curiosity, problem-solving, and teamwork.
                    <br /><br />
                    Their contributions have empowered multiple generations of developers and tech enthusiasts, leaving behind a legacy that continues to inspire new members to push boundaries, explore new technologies, and drive positive change in the tech community.
                </p>
            </div>


            {/* Team Members Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => {
                    let borderColor = "border-gray-500";



                    return (
                        <div key={member.id} className="flex flex-col items-center p-4 bg-zinc-900 rounded-xl shadow-md">
                            <img
                                src={member.img}
                                alt={member.name}
                                className={`w-24 h-24 rounded-full object-cover border-4 ${borderColor}`}
                            />
                            <h2 className="mt-3 text-lg font-semibold">{member.name}</h2>
                            <p className="text-sm font-medium text-white">{member.department}</p>
                            {/* <p className="text-sm font-medium text-white">{member.position}</p> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advisors;

