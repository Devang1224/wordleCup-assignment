import React, { useRef, useState  } from 'react'
import generateId from '../utils/generateId'
import { avatars } from '../assets/avatar';
import getRandomColor from '../utils/colors';




interface UserDetails {
  username: string;
  userId: string;
  userIcon:string,
  userColor:string
}

interface HomeProps {
  userDetails:UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
}


const Home: React.FC<HomeProps> = ({userDetails,setUserDetails}) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [error,setError] = useState('')



const handleStartChatting = async(e:React.ChangeEvent<HTMLFormElement>)=>{

  e.preventDefault();
  const username = inputRef.current?.value;
   
  if(!userDetails.userIcon){
    setError('Select an avatar first');
    return;
  }

  try{
      if(username){
         const userId = generateId();
         const userColor = getRandomColor();
         setUserDetails({...userDetails,username,userId,userColor});
      }
  }catch(err){
    console.log(err);
  }
}

const handleSelectAvatar = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const userIcon = e.target.id;
    setUserDetails({...userDetails,userIcon});
    setError('')
}



  return (
    <div className='p-10'>
    <h1 className='text-3xl'>ChatFlix</h1>

    <form onSubmit={handleStartChatting}>
    <div className='flex flex-col mt-[5rem] items-center'>

      <label htmlFor="username">Username</label>
      <input 
        type="text" 
        id="username"
        placeholder='Enter username' 
        className='p-2 rounded'
        ref={inputRef}
        required
        />
    </div>
     
    <div className='flex flex-wrap justify-center gap-4 mt-10 '>
    {
      Object.entries(avatars).map(([avatarKey, avatarSvg])=>(
         <span key={avatarKey}>
           <label  htmlFor={avatarKey} className='cursor-pointer flex items-center justify-center '>
            <img src={avatarSvg} width={50} className={` transition-all hover:border-2 hover:scale-150 hover:border-[#62ebfd] rounded-[50%] ${avatarKey===userDetails.userIcon && ('border-2 scale-150 border-[#62ebfd]')}`}/>
          </label>
          <input
              type='radio'
              name='avatar'
              id={avatarKey}
              className='hidden'
              onChange={handleSelectAvatar}
           />
         </span>
         
      ))
    }
    </div>
    <p className='text-[#ff4040] mt-5'>{error}</p>
    <button type='submit' className=' border font-semibold disabled:cursor-not-allowed  p-2 mt-10  hover:bg-white hover:text-black'>
      Start chatting
    </button>
      
    </form>

  </div>
  )
}

export default Home