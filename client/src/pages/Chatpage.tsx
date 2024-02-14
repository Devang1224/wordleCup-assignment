import { faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useRef, useState } from 'react'
import Messages from '../components/Messages';
import EmojiPicker from 'emoji-picker-react';


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
 const [toggleEmojiPicker,setToggleEmojiPicker] = useState(false);

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

const handleClickedEmoji = (emoji:any)=>{
  if (messageRef.current) {
    messageRef.current.value += emoji.emoji;
  }
}


  return (
    <div className='p-2 pt-4 h-full rounded-xl shadow-background flex flex-col justify-between md:p-5  '>
     <Messages socket={socket}/>
      <div className='flex'>
        <input 
         type="text"
         placeholder='Enter message'
         className='w-full p-2 text-[16px] md:text-[18px] outline-none'
         ref={messageRef}
         onKeyUp={handleEnterKey}
        />
        <div className='flex w-[100px] justify-between pr-5 gap-1 bg-[#3A3A3A] '>
          
          <button className=' text-[18px] md:text-[24px] transition-transform transform hover:-translate-y-1' onClick={()=>setToggleEmojiPicker(!toggleEmojiPicker)}>
            <FontAwesomeIcon icon={faFaceSmile} />
          </button>
          <button className='flex items-center justify-center transition-transform transform hover:-translate-y-1 ' onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} className='text-#e9e7e7 text-[18px] md:text-[24px] cursor-pointer ' />
          </button>
         {
          toggleEmojiPicker && <div className='origin-bottom-right absolute translate-x-[-100%] translate-y-[-100%]'>
                                 <EmojiPicker width={300} onEmojiClick={handleClickedEmoji}/>
                               </div>
          }
        </div>
      </div>

    </div>
  )
}

export default Chatpage