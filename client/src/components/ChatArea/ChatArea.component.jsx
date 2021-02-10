import React from 'react';

import RoomInfo from './../RoomInfo/RoomInfo.component';
import InputArea from './../InputArea/InputArea.components';
import Messages from './../Messages/Messages.component';
 
import './ChatArea.styles.css';
const ChatArea = ({sendMessage, message, setMessage,onEmojiClick}) => {
    return(
        <div className="ChatArea">
            <RoomInfo />
            <Messages />
            <InputArea 
                sendMessage = {sendMessage}
                message={message} 
                setMessage={setMessage}
                onEmojiClick={onEmojiClick}
                />
        </div>
         
    )
}

export default ChatArea;