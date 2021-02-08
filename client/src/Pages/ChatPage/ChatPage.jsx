import React, {useEffect, useState} from 'react';

import queryString from 'query-string';
import RoomInfo from '../../components/RoomInfo/RoomInfo.component';
import Messages from '../../components/Messages/Messages.component';
import InputArea from './../../components/InputArea/InputArea.components';
import CurrentUser from '../../components/CurrentUser/CurrentUser.component';

import './ChatPage.styles.css'
const ChatPage = ({socket, location}) =>{
    
    const [name, setName] = useState("");
    const [room , setRoom] = useState("");

    // useEffect(() =>{ 
    //     const {name, room} = queryString.parse(location.search);
        
    //     setRoom(room);
    //     setName(name);

       
    // });
    
    return(
        <div className="ChatPage">
            <div className="LeftPane">
              <h1>This is CurrentUser</h1>
                <CurrentUser />
            </div>
            <div className="RightPane">
                <RoomInfo />
                <Messages />
                <InputArea />
            </div>
        </div>
)};

export default ChatPage;