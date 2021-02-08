const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);

const options = { cors:true };
const io = require('socket.io')(server, options);
app.use(cors());
app.use(router);


io.on('connection',(socket) => {
    
    socket.on('join', ({name, room}, callback) =>{
        const {error, user} = addUser({id:socket.id, name, room});

        if(error) return callback(error);

        socket.join(user.room);

        socket.broadcast.to(user.room).emit('message', {user: 'admin', text :`${user.name} hopped into the ${user.room}`, type: 'text' });

        callback();
    });

    socket.on('sendMessage', () =>{
        const user= getUser(socket.id);

        io.to(user.room).emit('message',{user:user.name, text: message});

        callback();
    })

    console.log('we have a new connection');

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text:`${user.name} just left the room`, type:"text"});
            
        }
        console.log("user had left");
    })
})
app.use(router);

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
