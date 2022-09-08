import React from 'react'
import styles from '../style'
import emily from '../assets/image-emily.jpg'
import jennie from '../assets/image-jennie.jpg'
import thomas from '../assets/image-thomas.jpg'

const Feedback = () => {
  return (
    <div className='bg-white mx-[24px] lg:mx-[165px]'>
      <div className='text-center mt-[64px] lg:mt-[160px]'>
       <h1 className={`${styles.client_head} tracking-wide`}>Client Testimonials</h1>
      </div>
      <div className='flex mt-[64px] flex-row justify-around flex-wrap'>
        <div className='text-center max-w-[350px]'>
          <img className='block ml-auto mr-auto max-h-[72px] rounded-full'src={emily} alt="" />
          <p className={`${styles.client_p} my-[35px] lg:mt-[58px] lg:mb-[69px]`}>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <h4 className={`${styles.client_name} mb-[9px]`}>Emily R.</h4>
          <p className={`${styles.client_pos}`}>Marketing Director</p>
        </div>
        <div className='text-center max-w-[350px] mt-[64px] lg:mt-[0px]'>
          <img className='block ml-auto mr-auto max-h-[72px] rounded-full' src={thomas} alt="" />
          <p className={`${styles.client_p} my-[35px] lg:mt-[58px] lg:mb-[69px]`}>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <h4 className={`${styles.client_name} mb-[9px]`}>Thomas S.</h4>
          <p className={`${styles.client_pos}`}>Chief Operating Officer</p>
        </div>
        <div className='text-center max-w-[350px] mt-[64px] lg:mt-[0px]'>
          <img className='block ml-auto mr-auto max-h-[72px] rounded-full' src={jennie} alt="" />
          <p className={`${styles.client_p} my-[35px] lg:mt-[58px] lg:mb-[69px]`}>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <h4 className={`${styles.client_name} mb-[9px]`}>Jennie F.</h4>
          <p className={`${styles.client_pos}`}>Business Owner</p>
        </div>
        

      </div>
    </div>
  )
}

export default Feedback