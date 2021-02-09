import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import queryString from 'query-string';

import { connect } from 'react-redux';
import { setCurrentUser, setCurrentRoom } from './../../redux/user/user.action';

import RoomInfo from '../../components/RoomInfo/RoomInfo.component';
import Messages from '../../components/Messages/Messages.component';
import InputArea from './../../components/InputArea/InputArea.components';
import OnlineUser from '../../components/OnlineUser/OnlineUser.component';

import './ChatPage.styles.css'
const ChatPage = ({socket, location,setCurrentUser,setCurrentRoom}) =>{
    
    // const [name, setName] = useState("");
    // const [room , setRoom] = useState("");

     let history = useHistory();

    useEffect(() =>{ 
        // console.log(location.search);
        const { name, room } = queryString.parse(history.location.search);
        
        // setRoom(room);
        // setName(name);

        setCurrentUser(name);
        setCurrentRoom(room);
        console.log(name, room);
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
    setCurrentRoom: room =>dispatch(setCurrentRoom(room))
});

export default connect(null ,mapDispatchToProps)(ChatPage);