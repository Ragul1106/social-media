import React from 'react';

const ChatBox = ({ sender, message }) => (
  <div className={`alert ${sender === 'me' ? 'alert-primary text-end' : 'alert-secondary text-start'}`}>
    <strong>{sender}:</strong> {message}
  </div>
);

export default ChatBox;
