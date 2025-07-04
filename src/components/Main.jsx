import React from 'react'
import { FaWhatsapp } from 'react-icons/fa' 
import Hero from './Hero'
const images = [
  '/pics/6.JPG',
  '/pics/3.JPG',
  '/pics/1.JPG',
  '/pics/92.jpg',
  '/pics/4.JPG',
  '/pics/7.JPG',
  '/pics/9.jpg',
  '/pics/91.jpg',
  '/pics/8.JPG'
]

const latestEvents = [
  {
    title: 'AYNTK: Supervised Learning',
    date: 'March 30, 2025',
    description: 'SUDIPTA SEN',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQHhnqbxtxzcNQ/feedshare-shrink_800/B56ZXlfo.8GcAg-/0/1743312032974?e=1750291200&v=beta&t=-Jf5Jqmn8_ihQ5lDtT7q6rfzu9zXmnB5Lv2ACjIpTuw'
  },
  {
    title: 'Cyber Security for Developers',
    date: 'March 16, 2025',
    description: 'UJJAL BHATTACHARYA',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFg9N72hGxhdg/feedshare-shrink_800/B56ZWZlGAjHEAk-/0/1742038394216?e=1750291200&v=beta&t=AzDPRXITfWoFM6ufTphzRZ22ZQgRqslrypXBmInc5Uo'
  },
  // {
  //   title: 'Ultimate QNA Session',
  //   date: 'December 22, 2024',
  //   description: 'TEAM CACHE CREW',
  //   image: 'https://media.licdn.com/dms/image/v2/D5622AQFMquyAFNF_Ww/feedshare-shrink_2048_1536/B56ZPrBgI.HIAo-/0/1734814862316?e=1750291200&v=beta&t=PVHAmLbzR3xnuXgBQIwOmbmR1kUWg4fo5ztKFRtGnO8'
  // },
  {
    title: 'AYNTK: Git',
    date: 'November 30, 2024',
    description: 'ANURAG BHATTACHARJEE',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQG7X31xJLZPgw/feedshare-shrink_800/feedshare-shrink_800/0/1732887237340?e=1750291200&v=beta&t=n7Xg4NjB4RZohHdKLw9RpDYIG8s9Z5pDjRDvNIoU5F8'
  }
]

const Main = () => {
  return (
    <div className='flex flex-col items-center justify-center sm:mt-2 relative px-2'>
      {/* <img src='main.png' className='h-48 sm:h-96 my-32 sm:my-0 mb-72 sm:mb-28' alt='Main' /> */}
  
      <p className='mb-10 text-center sm:text-2xl sm:p-28'>
        Bit-2-Byte was born from a dream—to <span className='text-indigo-400 font-bold'>help others grow, upskill, and share knowledge</span> for the upliftment of GNIT's coding community.
        Through <span className='text-indigo-400 font-bold'>mentorship, workshops, and collaboration</span>, it has become a hub where passion meets innovation.
        The goal is simple—<span className='text-indigo-400 font-bold'>learn, inspire, and pass it on</span>!
      </p>
      <div className='mb-10 sm:mb-20 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl'>
        {images.map((src, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-xl shadow-lg group border-2 border-transparent 
            hover:border-blue-700 transition duration-300'
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className='w-full h-36 sm:h-44 object-cover rounded-xl'
            />
          </div>
        ))}
      </div>
      <h1 className='text-3xl sm:text-5xl text-blue-700 font-bold my-5'>Latest Webinars</h1>
      <div className='w-full max-w-6xl mt-16'>
        <div
          className='flex sm:grid sm:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 px-4'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {latestEvents.map((event, index) => (
            <div
              key={index}
              className='bg-zinc-900 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
              transition duration-300 min-w-[80%] sm:min-w-0 sm:w-auto snap-center'
            >
              <img src={event.image} alt={event.title} className='w-full ' />
              <div className='p-4'>
                <h3 className='text-[14px] sm:text-xl font-semibold'>{event.title}</h3>
                <p className='text-gray-400 text-[10px] sm:text-sm'>{event.date}</p>
                <p className='text-[12px] sm:text-base mt-2'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Main