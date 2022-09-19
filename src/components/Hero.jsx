import React from 'react'
import styles from '../style'
import background from '../assets/desktop/image-header.jpg';
import arrow from '../assets/icon-arrow-down.svg'

const Hero = () => {
  return (
    <div className='text-center min-h-[538px] max-h-[800px] grid justify-center'>

     <div>
       <h1 className={`${styles.heading1} relative z-0 top-[88px] lg:top-[105px] tracking-[6.25px] lg:tracking-[8.75px]`}>WE ARE CREATIVE</h1>
     </div>

     <div>
       <img className='ml-[165px] hover:scale-150 duration-500 lg:ml-[300px] mb-[70px]' src={arrow} alt="" />
     </div>

    </div>
  )
}

export default Hero

// absolute left-[173px] top-[294px] lg:left-[px] lg:top