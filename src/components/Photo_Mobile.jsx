import React from 'react'
import cone from '../assets/mobile/image-gallery-cone.jpg'
import sugar from '../assets/mobile/image-gallery-sugar-cubes.jpg'
import milk from '../assets/mobile/image-gallery-milkbottles.jpg'
import orange from '../assets/mobile/image-gallery-orange.jpg'

const Photo_Mobile = () => {
  return (
    <div className='xs:block lg:hidden mt-[86px]'>
        <div className='grid grid-cols-2'>
            <img className='max-w-[188px]' src={milk} alt='' />
            <img className='max-w-[188px]' src={orange} alt='' />
            <img className='max-w-[188px]' src={cone} alt= ''/>
            <img className='max-w-[188px]' src={sugar} alt= ''/>
        </div>
    </div>
  )
}

export default Photo_Mobile