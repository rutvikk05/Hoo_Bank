import React from 'react'
import styles, {layout} from '../styles'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section className= {` ${styles.flexCenter} ${styles.paddingY} flex-col relative ` }>
                 
        <div className='absolute z-[0] rounded-full blue__gradient -right-[50%] w-[60%] h-[60%]'>
    
          </div>           
        <div className= {`flex-col md:flex-row w-full flex justify-between items-center sm:mb-16 mb-6 relative z-[1]`}>
                
          <h2 className= {`${styles.heading2} `}>
          What people are  <br className='sm:block hidden' /> saying about us
          </h2>

          <div className=' w-full md:mt-0 mt-6'>

          <p className= {`${styles.paragraph} max-w-[450px] text-left  `} >
          Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
          
          </div>
        
        
        </div>         

     <div className= {`flex flex-wrap justify-center sm:justify-start feedback-container relative z-[1] w-full `}>

     {
      feedback.map((item) => (
        <FeedbackCard key = {item.id} {...item} /> 
      ) )
     }        
        
     </div>

        
    </section>
  )
}

export default Testimonials