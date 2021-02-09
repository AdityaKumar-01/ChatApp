import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import queryString from 'query-string';
import io from 'socket.io-client';

import { connect } from 'react-redux';
import { setCurrentUser, setCurrentRoom} from './../../redux/user/user.action';
import { setUserList, setRoom } from './../../redux/onlineUser/onlineUser.action';

import RoomInfo from '../../components/RoomInfo/RoomInfo.component';
import Messages from '../../components/Messages/Messages.component';
import InputArea from './../../components/InputArea/InputArea.components';
import OnlineUser from '../../components/OnlineUser/OnlineUser.component';

import './ChatPage.styles.css'


let socket;

const ENDPOINT = 'localhost:5000';
socket = io(ENDPOINT);
const ChatPage = ({ location, setCurrentUser,setCurrentRoom}) =>{
    
    // const [name, setName] = useState("");
    // const [room , setRoom] = useState("");
     let history = useHistory();

    useEffect(() =>{ 
        const { name, room } = queryString.parse(history.location.search);
        
        // setRoom(room);
        // setName(name);
        
        socket.emit('join', { name, room }, (error) => {

        setCurrentUser(name);
        setCurrentRoom(room);
        setRoom(room);

        })

        
        // socket.on('message', (text) =>{
        //     setMsg(text)
        // })

            // console.log(users);
    }, [history.location.search]);

    useEffect(() => {
    // socket.on('message', message => {
    //   setMessages(messages => [ ...messages, message ]);
    // });
    
    socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    console.log(users);
    });
}, []);
    return(
        <div className="ChatPage">
            <div className="LeftPane">
                <OnlineUser />
            </div>
            <div className="RightPane">
                <RoomInfo />
                <Messages />
                <InputArea />
            </div>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: name =>dispatch(setCurrentUser(name)),
    setCurrentRoom: room =>dispatch(setCurrentRoom(room)),
    setRoom: room => dispatch(setRoom(room))
});

export default connect(null ,mapDispatchToProps)(ChatPage);