import React from 'react'
import { useState } from 'react'
import hamb from '../assets/icon-hamburger.svg'

const NavPopup = () => {
  return (
    <div>
        <div className='z-20 transition-opacity nav_container mr-[24px] absolute flex justify-center items-center text-dark_grey_blue w-[329px] h-[329px] bg-white'>
    <ul className='font-barlow font-semibold flex flex-col gap-[32px] justify-center items-center text-[20px]'>
        <li><a className='nav_link' href="#">About</a></li>
        <li><a className='nav_link' href="#">Services</a></li>
        <li><a className='nav_link' href="#">Projects</a></li>
        <button className='ease-in duration-100 text-[15px] inline-block font-fraunces text-neutral_blue bg-primary_yellow rounded-3xl px-[30px] py-[15px] '>Contact</button>
    </ul>
    
  </div>
  </div>
  )
}

export default NavPopup