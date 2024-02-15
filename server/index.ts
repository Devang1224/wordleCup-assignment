
const express = require('express')
const http = require('http');
const cors = require('cors')
const socketIo = require('socket.io');

const app = express();
app.use(cors({
    origin: 'https://wordle-cup-assignment.vercel.app',
}));


const server = http.createServer(app);
const io = socketIo(server,{
    cors: {
        origin: 'https://wordle-cup-assignment.vercel.app',
        methods: ['GET', 'POST']
      }
});


app.use(express.json());


interface userData{
    username:string,
    message:string,
    userId:string,
    userIcon:string,
    userColor:string
}

const roomname:string = 'chat-room';


server.listen(3000, () => {
    console.log('server is running');
})


io.on('connection', (socket:any) => {


socket.join(roomname);

    socket.on('send-message',(data:userData)=>{
        io.to(roomname).emit('user-message',data)
    })
})
