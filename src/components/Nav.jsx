import React from 'react'
import styles from '../style'
import logo from '../assets/logo.svg'
import hamb from '../assets/icon-hamburger.svg'
import NavPopup from './NavPopup'
import { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
  <div>
    <nav className='flex justify-between mt-[32px]'>
      <div className='self-center'>
        <img src={logo} alt="" />
      </div>
      <div className='hamb  lg:hidden pl-[179px]'>
        <img src={hamb} alt="" onClick={() => setOpen(!open)} />
      </div>
      <div>
        <ul className={`xs:hidden lg:block font-barlow font-semibold text-white inline-block`}>
            <li className='inline-block pr-12'><a className='nav_link' href="#">About</a></li>
            <li className='inline-block pr-12'><a className='nav_link' href="#">Services</a></li>
            <li className='inline-block pr-12'><a className='nav_link' href="#">Projects</a></li>
            <button className={`${styles.btn1} ease-in duration-100 inline-block`}>Contact</button>
        </ul>
        
      </div>
  

    </nav>
    {open && <NavPopup />}
  </div>

  )
}

export default Nav