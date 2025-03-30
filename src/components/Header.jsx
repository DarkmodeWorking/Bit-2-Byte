import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Music } from 'lucide-react'
import { motion } from 'framer-motion'

const menuItems = [
  { name: 'People', dropdown: [ { label: 'Faculty', link: '/faculty' }, { label: 'Advisors', link: '/advisors' }, { label: 'Team of 2024', link: '/team-2024' } ] },
  { name: 'Events', dropdown: [ { label: 'Upcoming Events', link: '/upcoming-events' }, { label: 'Past Events', link: '/past-events' } ] },
  { name: 'Community', dropdown: [ { label: 'Discord', link: '/discord' } ] },
  { name: 'Archives', dropdown: [ { label: 'Endorsements', link: '/endorsements' } ] }
]

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const timeoutRef = useRef(null)
  const audioRef = useRef(new Audio('/videoplayback.m4a'))
  const [isPlaying, setIsPlaying] = useState(false)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const handleMouseEnter = (index) => { clearTimeout(timeoutRef.current); setActiveDropdown(index); }
  const handleMouseLeave = () => { timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200); }
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='px-6 sm:px-10 sm:pr-36 py-4 shadow-md text-white relative z-50'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Link to='/'>
            <img src='logo.png' className='rounded-full h-12 sm:h-16 cursor-pointer' alt='Logo' />
          </Link>
            <span className="font-semibold text-2xl"  >Bit 2 Byte</span>
        </div>
        <nav className='hidden md:flex'>
          <ul className='flex space-x-8'>
            {menuItems.map((item, index) => (
              <li key={index} className='relative group' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                <button className='text-lg font-semibold hover:text-blue-700 transition'>{item.name}</button>
                {activeDropdown === index && (
                  <ul className='absolute left-0 mt-2 w-48 bg-zinc-950 shadow-lg rounded-lg'>
                    {item.dropdown.map((option, i) => (
                      <li key={i}>
                        <Link to={option.link} className='block px-4 py-2 hover:text-blue-700 transition'>{option.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className='md:hidden flex items-center' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className='h-8 w-8 text-white' /> : <Menu className='h-8 w-8 text-white' />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <>
          <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={toggleMobileMenu}></div>
          <div className='absolute top-16 right-0 left-0 ml-32 mr-5 mt-10 bg-zinc-900 shadow-lg rounded-lg z-50 p-4'>
            <ul className='space-y-4'>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button className='w-full text-left text-lg font-semibold hover:text-blue-700 transition' onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}>
                    {item.name}
                  </button>
                  {activeDropdown === index && (
                    <ul className='mt-2 space-y-2'>
                      {item.dropdown.map((option, i) => (
                        <li key={i}>
                          <Link to={option.link} className='block px-4 py-2 hover:text-blue-700 transition'>{option.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {/* <motion.button 
        drag 
        dragConstraints={{ right: 0, right: window.innerWidth - 50, top: 0, bottom: window.innerHeight - 50 }}
        onClick={toggleMusic} 
        className='fixed top-16 sm:top-8 right-8 bg-zinc-950 text-blue-700 hover:text-blue-400 p-2 rounded-full shadow-lg z-50 cursor-pointer'
      >
        <Music className='h-6 w-6' />
      </motion.button> */}
    </div>
  )
}

export default Header