import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinPage from './Pages/JoinPage/JoinPage';
import ChatPage from './Pages/ChatPage/ChatPage';


const App = () => (
    <Router>
    
        <Route path = '/' exact component={() => <JoinPage />}/>
        <Route path = '/chat' component={() => <ChatPage />}/>
        {/* <Route path='/' exact component={JoinPage}/>
        <Route path='/chat' component={ChatPage} /> */}
    </Router>
)

export default App;