import React from 'react'
import styles from '../style'
import logo from '../assets/logo.svg'
import hamb from '../assets/icon-hamburger.svg'

const Nav = () => {
  return (
    <nav className='flex justify-between mt-[32px]'>
      <div className='self-center'>
        <img src={logo} alt="" onclick='toggleMenu()' />
      </div>
      <div className='lg:hidden pl-[179px]'>
        <img src={hamb} alt="" />
      </div>
      <div>
        <ul className={`xs:hidden lg:block font-barlow font-semibold text-white inline-block`}>
            <li className='inline-block pr-12'><a href="#">About</a></li>
            <li className='inline-block pr-12'><a href="#">Services</a></li>
            <li className='inline-block pr-12'><a href="#">Projects</a></li>
            <button className={`${styles.btn1} ease-in duration-100 inline-block`}>Contact</button>
        </ul>
        
      </div>

    </nav>

  )
}

export default Nav