import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to = '/' className = 'w-14 h-10 rounded-1g bg-white items-center justify-center flex font-bold shadow-md'>
            <p className='blue-gradient_text'>Home</p>
        </NavLink>
        <nav className='flex text-1g gap-7 font-medium'>
            <NavLink to= '/fun' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                <p>Fun</p>
            </NavLink>
            <NavLink to= '/contact' className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                <p>Contact</p>
            </NavLink>
            <a href='https://chandu-864.github.io/My-Portfolio/' target='blank' className='text-black underline'>
                <p>Portfolio</p>
            </a>
        </nav>
        
    </header>
  )
}

export default Navbar