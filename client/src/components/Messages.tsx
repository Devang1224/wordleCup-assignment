import { useEffect, useRef, useState } from "react";
import { avatars } from "../assets/avatar";


interface Data {
  message:string
  userId:string,
  username:string
  userIcon:string,
  userColor:string,
}

interface MessagesProps {
  socket:any;
}

type AvatarMap = {
  [key: string]: string;
};

 const Messages:React.FC<MessagesProps> = ({socket}) => {

const [messages, setMessages] = useState<Data[]>([]);
const scrollRef = useRef<HTMLDivElement>(null);


useEffect(()=>{

  socket.on('user-message',(data:Data)=>{
      setMessages((prev)=>[...prev,data])
      console.log(data);
  })

return ()=> socket.off('user-message')

},[])

useEffect(()=>{
    scrollRef.current?.scrollIntoView({bhaviour:"smooth"})
},[messages])

    return (

      <div className='flex flex-col flex-grow overflow-y-auto'>
        {
          messages?.map((item,index)=>{
            return <div ref={scrollRef} key={index} className="flex justfify-start mb-5 ">
                     <div className="min-w-[40px]">
                      <img src={(avatars as AvatarMap)[item.userIcon]} width={40} />
                     </div>
                     <div className="flex flex-col items-start ml-3">
                      <p style={{ color: item.userColor }} className="font-semibold">{item.username}</p>
                      <p className="text-start mt-2">{item.message}</p>
                     </div>
                   </div>
          })
        }
      </div>
    );
  }
  
  export default Messages;
  