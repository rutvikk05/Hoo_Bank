import React from 'react'
import styles from '../styles'
import {clients} from '../constants'

const Clients = () => {
  return (
   
  
   <div className= {`${styles.flexCenter} flex-wrap w-full my-4`}>
  
  {
    clients.map((client) => (
    
    <div key = {client.id} className= {`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}>
     <img src= {client.logo} alt="logo" className='sm:w-[192px] w-[100px] object-contain hover:filter-opacity'/>            
    </div> 
    ))
  }
   </div>


  )
}

export default Clients