import React from 'react'
import styles from '../style'
//Desktop IMG
import orange from '../assets/desktop/image-photography.jpg'
import egg from '../assets/desktop/image-transform.jpg'
import glass from '../assets/desktop/image-stand-out.jpg'
import cherry from '../assets/desktop/image-graphic-design.jpg'
//Mobile IMG

const Cart = () => {
  return (
    //Desktop
  <div className='xs:hidden lg:block'>
    <div className='cart'>
      <div className='bg-white text1 flex items-center justify-center w-full'>
        <div className='text_cont'>
          <h1 className={`${styles.heading2} leading-[49px] tracking-tighter`}>Transform your brand</h1>
          <p className={`${styles.cart_p} pt-[9px] pb-[63px]`}>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <button className= {`${styles.btn2} `}>Learn More</button>
          <div className='line relative bottom-2 lg:max-w-[137px] lg:max-h-[10px]'></div>
        </div>
      </div>
      <div className="img1 max-h-[312px]"  style={{  
             backgroundImage: `url(${egg})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
            }}>
      </div>

      <div className="img2 min-h-[600px]" style={{  
             backgroundImage: `url(${glass})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
            }}>
      </div>
      <div className="text2 bg-white flex items-center justify-center w-full">
        <div className="text_cont ">
          <h1 className={`${styles.heading2} leading-[49px] tracking-tighter`}>Stand out to the right audience</h1>
          <p className={`${styles.cart_p} pt-[9px] pb-[63px]`}>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
          <button className= {`${styles.btn2} z-10`}>Learn More</button>
          <div className='line_2 relative bottom-2  lg:max-w-[137px] lg:max-h-[10px]'></div>
        </div>
      </div>
      <div className="img3 text-center  flex justify-center items-center flex-col" style={{  
             backgroundImage: `url(${cherry})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
            }}>
              <div className='max-w-[350px]'>
                <h1 className={`${styles.graph_heading} mt-[339px]`}>Graphic Design</h1>
                <p className={`${styles.paragraph} pt-[27px]`}>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
              </div>

      </div>
      <div className="img4 text-center flex justify-center items-center flex-col "style={{  
             backgroundImage: `url(${orange})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
            }}>
              <div className='max-w-[350px]'>
                <h1 className={`${styles.photo_heading} mt-[315px]`}>Photography</h1>
                <p className={`${styles.photo_p} text-photo_text pt-[27px]`}>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
              </div>
        </div>

     </div>
   </div>
  )
}

export default Cart