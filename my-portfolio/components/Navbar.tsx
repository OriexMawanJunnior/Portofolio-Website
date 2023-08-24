"use client"
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'


const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
          <Link href='/'  className='mx-4'>Home</Link>
          <Link href='/about' className='mx-4'>About</Link>
          <Link href='/project' className='mx-4'>Project</Link>
        </nav>

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
        </div>
    </header>
  )
}

export default Navbar