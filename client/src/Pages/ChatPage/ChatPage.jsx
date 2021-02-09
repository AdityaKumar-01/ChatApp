import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import queryString from 'query-string';
import io from 'socket.io-client';

import { connect } from 'react-redux';
import { setCurrentUser, setCurrentRoom} from './../../redux/user/user.action';
import { updateUsers } from './../../redux/roomData/roomData.action';

import RoomInfo from '../../components/RoomInfo/RoomInfo.component';
import Messages from '../../components/Messages/Messages.component';
import InputArea from './../../components/InputArea/InputArea.components';
import OnlineUser from '../../components/OnlineUser/OnlineUser.component';

import './ChatPage.styles.css'


let socket;


const ChatPage = ({ location, setCurrentUser,setCurrentRoom, updateUsers}) =>{
     
    const ENDPOINT = 'localhost:5000';
    
    let history = useHistory();

    useEffect(() =>{ 
        socket = io(ENDPOINT);
        const { name, room } = queryString.parse(history.location.search);
        
        setCurrentUser(name);
        setCurrentRoom(room);
        socket.on('roomData', ({room,user}) =>{
            console.log("hey tehrer");
            // updateUsers(users)
        })
    }, [history.location.search]);

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
    updateUsers: user => dispatch(updateUsers(user)),
});

export default connect(null ,mapDispatchToProps)(ChatPage);