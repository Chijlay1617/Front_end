import React from 'react';
import './chat.css';

const Chat = () => {
  return (
    <div className="chat-input">
      <input type="text" placeholder="...." />
      <button>Send</button>
    </div>
  );
}

export default Chat;