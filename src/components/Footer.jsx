import React from 'react'
import styles from '../style'
import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import inst from '../assets/icon-instagram.svg'
import pint from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='min-h-[350px] bg-footer flex items-center justify-center flex-col'>
      <div>
        <div>
          <img className='block ml-auto mr-auto' src={logo} alt="" />
        </div>
        <div>
          <ul className='mt-[40px] font-barlow font-semibold text-text_cyan text-base'>
            <li className='inline-block pr-12'><a href="#">About</a></li>
            <li className='inline-block pr-12'><a href="#">Services</a></li>
            <li className='inline-block'><a href="#">Projects</a></li>
          </ul>
        </div>
        <div className='flex justify-between mt-[88px] max-w-[164px] ml-auto mr-auto'>
          <img className='inline-block' src={facebook} alt="" />
          <img className='inline-block' src={inst} alt="" />
          <img className='inline-block' src={twitter} alt="" />
          <img className='inline-block' src={pint} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer