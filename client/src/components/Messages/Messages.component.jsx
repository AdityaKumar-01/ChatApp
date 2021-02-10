import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import { connect } from 'react-redux';

import './Messages.styles.css'
import Message from './../Message/Message.component';

const Messages = ({ messages, currentUser }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={currentUser}/></div>)}
  </ScrollToBottom>
);

const mapStateToProps = state => ({
    messages: state.roomData.messages,
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Messages);