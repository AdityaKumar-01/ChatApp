import React from 'react';
import io from 'socket.io-client';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinPage from './Pages/JoinPage/JoinPage';
import ChatPage from './Pages/ChatPage/ChatPage';

let socket;

const ENDPOINT = 'localhost:5000';
socket = io(ENDPOINT);

const App = () => (
    <Router>
    
        <Route path = '/' exact component={() => <JoinPage socket={socket}/>}/>
        <Route path = '/chat' component={() => <ChatPage socket={socket}/>}/>
        {/* <Route path='/' exact component={JoinPage}/>
        <Route path='/chat' component={ChatPage} /> */}
    </Router>
)

export default App;