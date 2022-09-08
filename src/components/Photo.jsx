import React from 'react'
import styles from '../style'
import cone from '../assets/desktop/image-gallery-cone.jpg'
import sugar from '../assets/desktop/image-gallery-sugarcubes.jpg'
import milk from '../assets/desktop/image-gallery-milkbottles.jpg'
import orange from '../assets/desktop/image-gallery-orange.jpg'


const Photo = () => {
  return (
    <div className='xs:hidden lg:block'>
      <div className='flex justify-center mt-[160px]'>
            <img className='min-w-[385px] max-h-[447px]' src={milk} alt='' />
            <img className='min-w-[385px] max-h-[447px]' src={orange} alt='' />
            <img className='min-w-[385px] max-h-[447px]' src={cone} alt= ''/>
            <img className='min-w-[385px] max-h-[447px]' src={sugar} alt= ''/>
        </div>

    </div>
  )
}

export default Photo