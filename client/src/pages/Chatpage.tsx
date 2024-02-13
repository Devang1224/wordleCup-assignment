import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Chatpage = () => {
  return (
    <div className='h-full rounded-xl shadow-background flex flex-col justify-between p-2'>
      <div>
        text messages
      </div>
      <div className='flex'>
        <input 
         type="text"
         placeholder='Enter message'
         className='w-full p-2 text-[18px] outline-none'
        />
        <div className='bg-[#3A3A3A] flex items-center justify-center pr-5 '>
           <FontAwesomeIcon icon={faPaperPlane} className='text-#e9e7e7 text-[24px] cursor-pointer transition-transform transform hover:-translate-y-1' />
        </div>
      </div>

    </div>
  )
}

export default Chatpage