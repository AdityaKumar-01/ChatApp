import React, {useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import queryString from 'query-string';
import io from 'socket.io-client';

import { connect } from 'react-redux';
import { setCurrentUser, setCurrentRoom} from './../../redux/user/user.action';
import { updateUsers, addMessage } from './../../redux/roomData/roomData.action';

import OnlineUser from '../../components/OnlineUser/OnlineUser.component';
import ChatArea from './../../components/ChatArea/ChatArea.component';

import './ChatPage.styles.css'



let socket;
const ENDPOINT = 'localhost:5000';

const ChatPage = ({ location, setCurrentUser,setCurrentRoom, updateUsers, addMessage}) =>{
    
    const [message, setMessage] = useState("");
    const [code, setCode] = useState("");

    const onEmojiClick = (emojiObject) => setMessage(message+ emojiObject)
    let history = useHistory();
    useEffect(() =>{ 
        socket = io(ENDPOINT);
        const { name, room, uniCode } = queryString.parse(history.location.search);
        
        socket.emit('join', {name,room,uniCode }, (error)=>{
            if(error){
                console.log(error);
            }
        })
        setCurrentUser(name);
        setCurrentRoom(room);
        socket.on('ActiveUsers', ({users}) =>{
            updateUsers(users);
        })
    }, [history.location.search]);

    const sendMessage = (event) => {
        
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    const sendCode = (event) => {

        event.preventDefault();
        if(code){
            socket.emit('sendCode', code, () => setCode(''));
        }

    }
    useEffect(() =>{
        
        socket.on('message', (msg) =>{
            addMessage(msg);

        })
    }, []);
    
    return(
        <div className="ChatPage">
                <OnlineUser />
                <ChatArea
                    sendMessage = {sendMessage}
                    message={message} 
                    setMessage={setMessage}
                    sendCode={sendCode}
                    code={code}
                    setCode={setCode}
                    onEmojiClick={onEmojiClick}
                />
        </div>
)};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: name =>dispatch(setCurrentUser(name)),
    setCurrentRoom: room =>dispatch(setCurrentRoom(room)),
    updateUsers: user => dispatch(updateUsers(user)),
    addMessage: msg => dispatch(addMessage(msg)),
});

export default connect(null ,mapDispatchToProps)(ChatPage);