import React from 'react'
import {apple,bill,google} from '../assets'
import styles,{layout} from '../styles'

const Billing = () => {
  return (  
    <section id='product' className= {layout.sectionReverse}>
   <div className= {layout.sectionImgReverse}> 
  <img src= {bill} alt="bill"  className='w-[100%] h-[100%] relative z-[5]'/>
    <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>

    <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'>

    </div>

</div>
<div className= {layout.sectionInfo}>
   <h2 className= {styles.heading2}>
       Easily control your <br className='sm:block hidden'/> billing & invoicing 
   </h2>

   <p className= {`${styles.paragraph} max-w-[470px] mt-5`}>
    Blanditiis, voluptatem! Possimus laudantium itaque iure debitis aperiam quaerat unde, maxime repellat provident, error eaque eum aspernatur dolor laborum amet sunt, sapiente corrupti! Quae, illo hic. Quis obcaecati aperiam laborum?
   </p>

    <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src= {apple} alt="app " className='w-[128px] h-[42px] cursor-pointer object-contain mr-5' />
        <img src= {google} alt="google
        
        " className='w-[128px] h-[42px] cursor-pointer object-contain mr-5' />
    </div>

    
   </div>


    
    </section>
  )
}

export default Billing