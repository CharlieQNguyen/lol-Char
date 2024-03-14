"use client"
import React from 'react'
import Image from 'next/image'
import League_Logo from "../../../public/League_Logo.png"
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleNav = () => {
    //setting opposite
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white z-50'>
      <div className='flex justify-between items-center h-full w-full px-5 2xl:px-16'>
        <Link href="/">
            <Image 
            src={League_Logo}
            alt="Logo"
            width={80}
            height={75}
            className='cursor-pointer'
            priority
          />
        </Link>

        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex'>
            <Link href="/about">
              <li className='ml-10 uppercase hover:border-b text-xl'>About</li>
            </Link>
            <Link href="/characters">
              <li className='ml-10 uppercase hover:border-b text-xl'>Characters</li>
            </Link>
            <Link href="/api/auth/signout">
              <li className='ml-10 uppercase hover:border-b text-xl'>Sign Out</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
          <IoMdMenu size={25} />
        </div>
      </div>

      <div className={
        menuOpen
        ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }
      >
      <div className='flex w-full items-center justify-end'>
          <div onClick={handleNav} className='cursor-pointer'> 
            <AiOutlineClose size={25} />
          </div>
      </div>
      <div className='py-4 flex-col'>
        <ul>
          <Link href="/">
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer"> About </li>
          </Link>
          <Link href="/characters">
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer"> Characters </li>
          </Link>
          <Link href="/">
            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer"> Sign Out </li>
          </Link>
        </ul>
      </div>
      <div className='flex flex-row justify-around pt-10 items-center'>
        <AiOutlineInstagram size={30} className='cursor-pointer'/>
        <AiOutlineFacebook size={30} className='cursor-pointer'/>
        <AiOutlineTwitter size={30} className='cursor-pointer'/>
      </div>
    </div>
  </nav>
  )
}

export default Navbar