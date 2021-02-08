import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import queryString from 'query-string';
import RoomInfo from '../../components/RoomInfo/RoomInfo.component';
import Messages from '../../components/Messages/Messages.component';
import InputArea from './../../components/InputArea/InputArea.components';
import OnlineUser from '../../components/OnlineUser/OnlineUser.component';

import './ChatPage.styles.css'
const ChatPage = ({socket, location}) =>{
    
    const [name, setName] = useState("");
    const [room , setRoom] = useState("");

     let history = useHistory();

    useEffect(() =>{ 
        // console.log(location.search);
        const { name, room } = queryString.parse(history.location.search);
        
        setRoom(room);
        setName(name);

       
    }, []);
    
    return(
        <div className="ChatPage">
            <div className="LeftPane">
                <OnlineUser />
            </div>
            <div className="RightPane">
                <RoomInfo 
                    name={name}
                    room={room}
                />
                <Messages />
                <InputArea />
            </div>
        </div>
)};

export default ChatPage;