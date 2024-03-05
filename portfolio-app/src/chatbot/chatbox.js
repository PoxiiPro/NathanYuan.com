import React, { useState } from 'react';
import './chatbox.css';
import { FaWindowMinimize } from 'react-icons/fa';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    // input trim only sends an input if it is NOT empty
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // send the message to chatbot API
    }
  };

  return (
    <div className="chat-container">
      <button className={`chat-button ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaWindowMinimize className="FaWindowMinimize" /> : '💬'}
      </button>
      {isOpen && (
        <div className="chat-box">
          <div className="user-messages">
            {messages.map((message, index) => (
              <p key={index} className={message.sender}>
                {message.text}
              </p>
            ))}
          </div>
          <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question..."

                // press enter to send message
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();

                    // Prevents a new line in the input after pressing 'Enter'
                    e.preventDefault();
                  }
                }}
              />
            {/* press button arrow to send message */}
            <button onClick={handleSend}>↑</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
