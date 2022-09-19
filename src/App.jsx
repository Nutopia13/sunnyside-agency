import { useState } from 'react'
import Cart from './components/Cart'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Photo from './components/Photo'
import styles from './style'
import background from './assets/desktop/image-header.jpg'
import Cart_Mobile from './components/Cart_Mobile'
import Photo_Mobile from './components/Photo_Mobile'
import NavPopup from './components/NavPopup'


function App() {
  return (
    <div className="App">
      <div className='bg-white w-full overflow-hidden'>
        <div style={{  
             backgroundImage: `url(${background})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
}}>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
            <div className={`${styles.boxWidth} bg-transparent`}> 
             <Nav /> 
            </div> 
          </div> 
          <div className={`${styles.flexCenter}`}> 
            <div className={`${styles.boxWidth2}`}> 
             <Hero /> 
           </div> 
          </div> 
       </div>

        <div className={`${styles.boxWidth2}`}>
          <Cart />
          <Cart_Mobile />
        </div>
        <div className={`${styles.boxWidth2}`}>
          <Feedback />
        </div>
        <div className={`${styles.boxWidth2}`}>
          <Photo />
          <Photo_Mobile />
        </div>
        <footer>
          <Footer />
        </footer> 

      </div>
    </div>
  )
}

export default App
