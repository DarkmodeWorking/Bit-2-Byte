import React from 'react'
import { FaDiscord } from 'react-icons/fa' 

const Discord = () => {
  return (
    <div className='my-10 flex flex-col items-center justify-center min-h-screen text-center px-6'>
      <h1 className='text-3xl sm:text-4xl font-bold text-blue-700 mb-4'>
        Join the Bit-2-Byte Discord Community!
      </h1>
      <p className='text-lg m-5 sm:text-2xl text-gray-300 max-w-2xl'>
        Connect with fellow developers, participate in coding discussions, get mentorship, and stay updated on all events.
        Whether you&apos;re a beginner or a pro, our collaborative community is here to help you learn, grow, and innovate together!
      </p>
      <a
        href='https://discord.gg/qXfMHtxX'
        target='_blank'
        rel='noopener noreferrer'
        className='mt-6 px-6 py-3 flex items-center space-x-2 bg-indigo-600 text-white text-lg font-semibold 
        rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300'
      >
        <FaDiscord className='text-2xl' />
        <span>Join Our Discord Server</span>
      </a>
      <div className='mt-12 max-w-3xl text-left bg-zinc-900 p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-blue-600 mb-3'>📜 Rules & Regulations</h2>
        <ul className='list-disc list-inside text-gray-300 space-y-2 text-md'>
          <li><span className='text-blue-600 font-semibold'>Be Respectful:</span> Treat everyone with kindness and professionalism.</li>
          <li><span className='text-blue-600 font-semibold'>No Spamming:</span> Avoid unnecessary messages, self-promotion, or irrelevant content.</li>
          <li><span className='text-blue-600 font-semibold'>Stay On-Topic:</span> Use the correct channels for discussions.</li>
          <li><span className='text-blue-600 font-semibold'>No Hate Speech:</span> Harassment, discrimination, or offensive language is strictly prohibited.</li>
          <li><span className='text-blue-600 font-semibold'>Respect Privacy:</span> Do not share personal or sensitive information of yourself or others.</li>
          <li><span className='text-blue-600 font-semibold'>Follow Discord TOS:</span> Ensure compliance with <a href='https://discord.com/terms' target='_blank' rel='noopener noreferrer' className='text-blue-400 underline'>Discord's Terms of Service</a>.</li>
        </ul>
      </div>
    </div>
  )
}

export default Discord
