// Message.jsx

import React from 'react';

const Message = ({ message }) => {
  const messageClass = message.sentByHomeUser ? 'self-end' : 'self-start';

  return (
    <div className={`message py-2 px-4 bg-black rounded-2xl text-white mb-0.5 ${messageClass}`}>
      {message.text}
    </div>
  );
};

export default Message;
