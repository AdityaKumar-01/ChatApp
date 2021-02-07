import React, {useState} from 'react';

import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './JoiningForm.styles.css'; 
import {motion} from 'framer-motion';

const JoiningForm = ({socket}) => {

    const [name, setName] = useState("");
    const [room , setRoom] = useState("");

    let history = useHistory();

    const handleClick = (event) => {
        event.preventDefault()
        socket.emit('join', { name, room }, (error) => {
            if(error) {
                swal({
                    title: "Oops Error!!!!",
                    text: error,
                    icon: "error",
                    button: "Check Again",
                    });
                setName("");
                setRoom("");
            }
            else if(name && room){
                // setCurrentUser(name);
                // setCurrentRoom(room);
                history.push(`/chat?name=${name}&room=${room}`)
            }
                
        })
       
    }
    return(
        <div className="formOuterContainer">
            <form>
                <input
                    className='form-input'
                    type='text'
                    value = {name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder='Your Name'
                    required
                />
                <input
                    className='form-input'
                    type='text'
                    value={room}
                    onChange={(event) => setRoom(event.target.value)}
                    placeholder='Your Room'
                    required
                />
                <button 
                    className = 'joinButton'
                    type='submit'
                    onClick={handleClick}
                >
                    Join
                </button>
            </form>
        </div>
        
    )

}

export default JoiningForm;