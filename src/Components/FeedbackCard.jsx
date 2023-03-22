import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'

const FeedbackCard = ({name,title,content, img}) => {
  return (
    <div className='flex justify-between flex-col feedback-card px-10 py-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px]' >
        <img src= {quotes} alt="quotes" className='w-[42px] h-[27px] object-contain' /> 
      <p className='font-poppins text-white font-normal text-[18px] leading-[32px] my-10'>{content}</p>


          <div className=' flex'>

       <img src= {img} alt="img" className='w-[48px] h-[48px] rounded-full' />

   <div className=' flex flex-col ml-4'>

       <p className ='font-poppins font-semibold leading-[32px] text-[20px] text-white '>{name}</p>
       <p className='font-poppins font-normal leading-[24px] text-[16px] opacity-[0.5] text-white '>{title}</p>
          </div>
   </div>
   
    </div>
  )
}

export default FeedbackCard