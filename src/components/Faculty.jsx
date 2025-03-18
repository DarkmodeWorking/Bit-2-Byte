import React from "react";

const teamMembers = [
    {
        id: 1,
        name: "Dr. Mahamuda Sultana",
        department: "Dept. of Computer Science Engineering (CSE)",
        img: "https://media.licdn.com/dms/image/v2/D5603AQG67AibWRr7Lg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714373474088?e=1747872000&v=beta&t=IZZsSf_wrl0OsZ5Cq4mpPCMSv0Ue0wNaVMybJnYV62E"
    },
    {
        id: 2,
        name: "Mr. Tridib Chakraborty",
        department: "Dept. of Information Technology (IT)",
        img: "https://media.licdn.com/dms/image/v2/D4D03AQF7oL4rSI3LuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1674567537767?e=1747872000&v=beta&t=Szxo0mStm338VpNOKpk3siWrRHdEAt5PqdVcOMQyQ-k",
    }
];

const Faculty = () => {
    return (
        <div className="p-6">
            {/* Team Introduction */}
            <div className="mb-8 text-center text-white">
                <h1 className="text-5xl font-bold text-indigo-500">Faculty Co-ordinators</h1>
                <p className="mt-2 p-20 text-xl text-white tracking-wide">
                    The Faculty Members of Bit-2-Byte have been the backbone of the community, offering guidance, technical expertise, and unwavering support to help students excel in the world of technology. Their encouragement has played a crucial role in fostering a culture of learning and innovation.
                    <br /><br />
                    These dedicated professors have mentored students in software development, AI, cybersecurity, web technologies, and open-source contributions, ensuring that knowledge is shared effectively and practically. Their insights have helped bridge the gap between academics and industry, preparing students for real-world challenges.
                    <br /><br />
                    Through their involvement in workshops, hackathons, research collaborations, and mentorship programs, they have empowered students to push boundaries, take on ambitious projects, and stay ahead in the fast-evolving tech landscape. Their support has been instrumental in making Bit-2-Byte a thriving and impactful tech community.
                </p>
            </div>



            {/* Team Members Grid */}
            <div className="grid grid-cols-2 gap-6">
                {teamMembers.map((member, index) => {
                    let borderColor = "border-indigo-500";



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

export default Faculty;

