"use client"
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import LinkedinIcon from './Icons'
import GithubIcon from './Icons2'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
          <Link href='/'  className='mx-4'>Home</Link>
          <Link href='/about' className='mx-4'>About</Link>
          <Link href='/project' className='mx-4'>Project</Link>
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href='/' target={"_blank"} 
          whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'><LinkedinIcon></LinkedinIcon></motion.a>
          <motion.a href='/' target={"_blank"}
          whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3'><GithubIcon></GithubIcon></motion.a>
        </nav>

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
        </div>
    </header>
  )
}

export default Navbar