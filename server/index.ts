
const express = require('express')
const http = require('http');
const cors = require('cors')

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server,{
    cors: {
        origin: 'https://wordlecup-assignment.netlify.app',
        methods: ['GET', 'POST']
      }
});

app.use(cors());
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
