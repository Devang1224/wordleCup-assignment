
import { useMemo, useState } from 'react'
import './App.css'
import Chatpage from './pages/Chatpage'
import Home from './pages/Home'
import {io} from "socket.io-client";


function App() {

  const socket = useMemo(()=>io("http://localhost:6010"),[])
// https://wordlecup-assignment-backend-production.up.railway.app
  const[userDetails,setUserDetails] = useState({
    username:'',
    userId:'',
    userIcon:'',
    userColor:''
  })
  return (
    <>
    {
       (userDetails.userId && userDetails.username)?(<Chatpage userDetails={userDetails} socket={socket}/>):(<Home setUserDetails={setUserDetails} userDetails={userDetails} />)
    }
    </>
  )
}

export default App
