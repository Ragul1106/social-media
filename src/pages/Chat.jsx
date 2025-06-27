import React, { useState, useEffect } from 'react';
import ChatBox from '../components/ChatBox';
import chats from '../mock/mockChats';

const Chat = () => {
  const [messages, setMessages] = useState(chats);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'me', message: input }]);
      setInput('');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'John', message: 'Hey! How are you?' }]);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Chat</h3>
      <div className="border p-3 mb-3" style={{ height: '300px', overflowY: 'auto' }}>
        {messages.map((msg, idx) => <ChatBox key={idx} {...msg} />)}
      </div>
      <input
        className="form-control"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="btn btn-primary mt-2" onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
