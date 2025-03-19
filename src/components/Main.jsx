import React from 'react'
import { FaWhatsapp } from 'react-icons/fa' 

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
    title: 'Cyber Security for Developers',
    date: 'March 16, 2025',
    description: 'UJJAL BHATTACHARYA',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFg9N72hGxhdg/feedshare-shrink_800/B56ZWZlGAjHEAk-/0/1742038394216?e=1745452800&v=beta&t=VomIJRy3hun_QzyyHW5Sx3dCpqpq8LV0AoIMI9K-pwM'
  },
  {
    title: 'Ultimate QNA Session',
    date: 'December 22, 2024',
    description: 'TEAM CACHE CREW',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFMquyAFNF_Ww/feedshare-shrink_800/B56ZPrBgI.HIAg-/0/1734814862288?e=1745452800&v=beta&t=g54JG_TQ8OCwCO4ZPsxjnsRaiKduqzcQLhAcnv9xqtQ'
  },
  {
    title: 'All you need to know: GIT',
    date: 'November 30, 2024',
    description: 'ANURAG BHATTACHARJEE',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQG7X31xJLZPgw/feedshare-shrink_800/feedshare-shrink_800/0/1732887237340?e=1745452800&v=beta&t=ShPYIPenZI4M9tEBT4HctpOiUFB1p7l6x34U7dv_pvU'
  }
]

const Main = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-32 sm:mt-20 relative px-6'>
      <img src='main.png' className='h-48 sm:h-96 my-32 sm:my-0 mb-72 sm:mb-28' alt='Main' />
      <p className='mb-20 text-center sm:text-2xl sm:p-28'>
        Bit-2-Byte was born from a dream—to <span className='text-indigo-400 font-bold'>help others grow, upskill, and share knowledge</span> for the upliftment of GNIT's coding community.
        Through <span className='text-indigo-400 font-bold'>mentorship, workshops, and collaboration</span>, it has become a hub where passion meets innovation.
        The goal is simple—<span className='text-indigo-400 font-bold'>learn, inspire, and pass it on</span>!
      </p>
      <div className='mb-10 sm:mb-20 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl'>
        {images.map((src, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-xl shadow-lg group border-2 border-transparent 
            hover:border-indigo-500 transition duration-300'
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className='w-full h-36 sm:h-44 object-cover rounded-xl'
            />
          </div>
        ))}
      </div>
      <a
        href='https://chat.whatsapp.com/FqKO8sNUKsPB8IUfe6lIb2'
        target='_blank'
        rel='noopener noreferrer'
        className='relative mt-10 px-6 py-3 flex items-center space-x-2 bg-green-500 text-white sm:text-lg font-semibold 
        rounded-lg shadow-lg hover:bg-green-600 transition duration-300'
      >
        <div className='absolute -inset-2 rounded-full bg-green-500 opacity-75 blur-xl animate-pulse -z-10'></div>
        <FaWhatsapp className='text-2xl' />
        <span>Join The Official WhatsApp Group</span>
      </a>
      <h1 className='text-3xl sm:text-5xl text-indigo-500 font-bold mt-20 my-5'>Latest Webinars</h1>
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