import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useRef } from 'react'
import Messages from '../components/Messages';

interface ChatpageProps {
  userDetails: {
    username: string
    userId: string
    userIcon:string
    userColor:string
  };
  socket:any;
}

const Chatpage: React.FC<ChatpageProps> = ({socket,userDetails}) => {

  const messageRef = useRef<HTMLInputElement>(null);


  const handleSendMessage = ()=>{
     
    if (messageRef.current) { 

      const message = messageRef.current.value.trim();

      if (message) {
        const data = {
          message,
          username:userDetails.username,
          userId: userDetails.userId,
          userIcon:userDetails.userIcon,
          userColor:userDetails.userColor
        }
        socket.emit('send-message',data);
      }
      messageRef.current.value = '';
      
    }
  }

const handleEnterKey = (e:React.KeyboardEvent<HTMLInputElement>)=>{

if(e.key==='Enter')
{  
  handleSendMessage()
}
}

  return (
    <div className='h-full rounded-xl shadow-background flex flex-col justify-between p-5'>
     <Messages socket={socket}/>
      <div className='flex'>
        <input 
         type="text"
         placeholder='Enter message'
         className='w-full p-2 text-[18px] outline-none'
         ref={messageRef}
         onKeyUp={handleEnterKey}
        />
        <button className='bg-[#3A3A3A] flex items-center justify-center pr-5 group ' onClick={handleSendMessage}>
           <FontAwesomeIcon icon={faPaperPlane} className='text-#e9e7e7 text-[24px] cursor-pointer transition-transform transform group-hover:-translate-y-1' />
        </button>
      </div>

    </div>
  )
}

export default Chatpage