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
    
    socket.on('join', ({name, room, uniCode}, callback) =>{
        const {error, user} = addUser({id:socket.id, name, room, uniCode});

        if(error) return callback(error);

        socket.join(user.room);
        socket.emit('message',{user:'admin',text:`${user.name}, welcome to the room ${user.room} !!`, type:"text"})
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text :`${user.name} hopped into the ${user.room} !!`, type:"text"});
         io.to(user.room).emit('ActiveUsers', { users: getUsersInRoom(user.room) });
        callback();
    });


    socket.on('sendMessage', (message, callback) => {
        const user= getUser(socket.id);
        io.to(user.room).emit('message',{user:user.name, text: message, type:"text"});

        callback();
    })

    socket.on('sendCode',(message,callback) => {
        const user= getUser(socket.id);
        io.to(user.room).emit('message',{user:user.name, text: message, type:"code"});

        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text:`${user.name} just left the room`, type:"text"});
            io.to(user.room).emit('ActiveUsers', { users: getUsersInRoom(user.room) });

        }
    })
})
app.use(router);

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
