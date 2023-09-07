import React, { useState } from 'react';

import { headerLogo } from '../assets/images';
import { navLinks } from '../constants/index';

import { Fade as Hamburger } from 'hamburger-react'



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handelToggle = () => {setIsOpen(!isOpen);}
 
  


  return (
    <header className='padding-x py-8 w-full'>
      <nav className='center-between max-container'>
        <a href="/">
          <img src={headerLogo} height={40} width={100} alt="Logo" className='custom-image'/>
        </a>

        <ul className='flex-1 center-center gap-16 max-lg:hidden'>
          {navLinks.map(item => {
            return <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-500 '>{item.label}</a>
            </li>
          })}
        </ul>


        {/* ======== Menu Button ========= */}

        <div onClick={handelToggle} className='z-10 max-lg:block hidden cursor-pointer'>
        {/* {!isOpen ? <HiOutlineMenu className='text-blue-sec' size={30} /> : <CgClose size={30} className='text-blue-sec' />} */}
        <Hamburger rounded  color="#0080ff" size={25} toggled={isOpen} toggle={setIsOpen} />
        </div>

        {/* ======== Mobile Navbar ========= */}
        <div className={`top-0 h-full w-[50%] ease-in-out ${!isOpen ? 'fixed right-[-100%] duration-1000' : 'z-3  fixed right-0  max-lg:block hidden  duration-500'}`} onClick={handelToggle} >

          <ul className='center-center flex-col h-full gap-20 backdrop-blur-sm bg-white/50 border-l-2 border-bg-white/20 md:text-lg text-md'>
            {navLinks.map(item => {
              return <li key={item.label}>
                <a href={item.href} className='font-montserrat leading-normal text-md text-slate-gray hover:text-blue-500'>{item.label}</a>
              </li>
            })}
          </ul>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;