import React from 'react'
import styles from '../style'
import orange from '../assets/mobile/image-photography.jpg'
import egg from '../assets/mobile/image-transform.jpg'
import glass from '../assets/mobile/image-stand-out.jpg'
import cherry from '../assets/mobile/image-graphic-design.jpg'
const Cart_Mobile = () => {
  return (
 <div className='xs: block lg:hidden'>
    <div className='cart_mobile'>
        <div className='bg-white text1 flex items-center justify-center w-full pb-[64px]'>
        <div className='text_cont_mob'>
          <h1 className={`${styles.heading2} leading-[39px] tracking-tighter`}>Transform your brand</h1>
          <p className={`${styles.cart_p} pt-[9px] pb-[63px]`}>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <button className= {`${styles.btn2} z-50`}>Learn More</button>
          <div className='line_mob max-w-[137px] z-0 relative bottom-2 ml-auto mr-auto'></div>
        </div>
      </div>
      <div className="cart_img1"  style={{  
             backgroundImage: `url(${egg})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
            }}>
      </div>

      <div className="cart_img2" style={{  
             backgroundImage: `url(${glass})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
            }}>
      </div>
      <div className="text2 pb-[64px] bg-white flex items-center justify-center w-full">
        <div className="text_cont_mob ">
          <h1 className={`${styles.heading2} leading-[39px] tracking-tighter`}>Stand out to the right audience</h1>
          <p className={`${styles.cart_p} pt-[9px] pb-[63px]`}>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
          <button className= {`${styles.btn2}`}>Learn More</button>
          <div className='line_mob_2 max-w-[137px] relative bottom-2 ml-auto mr-auto'></div>
        </div>
      </div>
      <div className="cart_img3 text-center  flex justify-center items-center flex-col" style={{  
             backgroundImage: `url(${cherry})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
            }}>
              <div className='max-w-[350px]'>
                <h1 className={`${styles.graph_heading} mt-[339px]`}>Graphic Design</h1>
                <p className={`${styles.paragraph} mb-[59px] pt-[27px]`}>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
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

export default Cart_Mobile