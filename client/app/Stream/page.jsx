'use client';

import React, { useState } from 'react';
import LargeHomeNavbar from '@/components/LargeHomeNavbar';
import Message from '@/components/Message';

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sentByHomeUser: true }]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className='main bg-[#161616] h-screen flex'>
      <LargeHomeNavbar />

      <div className="right flex-grow flex">
        <div className="screen flex-grow bg-black rounded-2xl p-8 m-4 max-h-[1920px] min-h-[720px] w-3/4 overflow-auto">
          {/* Placeholder content for video boxes */}
          <div className="video-grid grid grid-cols-2 gap-2">
            {/* Video boxes go here */}
          </div>
        </div>

        <div className="chat bg-gray-800 w-1/5 m-4 rounded-2xl relative p-8 overflow-scroll">
          <h2 className="text-white text-2xl mb-4">Chat Area</h2>
          <div className='w-full h-auto bg-gray-700 my-10'></div>

          {/* Display chat messages using Message component */}
          <div className="chat-messages mb-4 flex flex-col items-end gap-2">
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </div>

          {/* Input field for sending messages */}
          <div className="flex justify-center items-center fixed bottom-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-grow h-10 px-4 border border-gray-600 rounded-l focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="h-10 px-4 bg-blue-500 text-white rounded-r"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
