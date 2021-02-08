import React from 'react';

import SendRoundedIcon from '@material-ui/icons/SendRounded';

import './MessageInput.styles.css'
const MessageInput = () =>{
    return(
        <span className="MessageInput">
            <form className="form">
                <input
                    placeholder="Type you messages here ..."
                    type="text"
                    className="input"
                    required
                />
                <button><SendRoundedIcon style={{ fontSize: 28 }}/></button>
            </form>
        </span>
        
    )
}

export default MessageInput;