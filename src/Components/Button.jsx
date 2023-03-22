import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className= {`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary ${styles} outline-none  rounded-lg`}>
       Get started

    </button>
  )
}

export default Button