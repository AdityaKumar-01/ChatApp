import React from 'react';

import './MessageInput.styles.css'
const MessageInput = ({sendMessage,message,setMessage}) =>{
    return(
        <span className="MessageInput">
            <form className="form">
                <input
                    placeholder="Type you messages here ..."
                    type="text"
                    className="input"
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                    required
                />
                <button className="msgbtn" onClick={e => sendMessage(e)}>SEND</button>
            </form>
        </span>
        
    )
}

export default MessageInput;