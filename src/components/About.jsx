import React from 'react'

const About = () => {
  return (
    <div className='m-5 sm:m-20 tracking-wide'>
			<p className='text-center text-3xl sm:text-5xl font-bold'> What is <span className='text-blue-400'>Bit-2-Byte</span> ? </p>
			<div className='sm:flex items-center gap'>
				<img src="about.png" className='h-96' alt="" />
				<p className='text-md p-5 sm:p-20'> Bit-2-Byte is more than just a name—it's a movement, a mission, and a beacon for every aspiring coder and tech enthusiast. Born out of the vision to create a thriving community, Bit-2-Byte is the heart of innovation at GNIT, where passion meets purpose, and ideas transform into solutions.
				<br /><br />
				This coding club stands as a testament to the limitless potential of technology. Its mission? To empower students, ignite curiosity, and cultivate a generation of problem solvers who can tackle the challenges of tomorrow. Every bit represents a spark of creativity, and every byte symbolizes the collective strength of the community.
				<br /><br />
				Bit-2-Byte isn't just about writing lines of code; it's about crafting the future. From competitive coding challenges that sharpen minds to collaborative projects that inspire innovation, the club is a hub for learning, sharing, and growing. It bridges the gap between theory and practice, bringing students together to decode complexities, build impactful applications, and leave a mark on the ever-evolving tech landscape.
				<br /><br />
				In the spirit of collaboration and camaraderie, Bit-2-Byte is a rallying cry for those who dare to dream, code, and create. Together, we are turning small ideas (bits) into groundbreaking realities (bytes), one line of code at a time. This is more than a club—it's a revolution. Will you join the journey? </p>
			</div>
    </div>
  )
}

export default About