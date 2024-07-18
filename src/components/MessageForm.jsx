import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const characterLimit = 500; // Set the character limit

  const dynamicTags = {
    '{guardian_name}': 'Guardian Name',
    '{child_name}': 'Child Name',
    '{due_date}': 'Due Date',
    '{due_amount}': 'Due Amount',
    '{fee_type}': 'Fee Type'
  };

  const handleTagClick = (tag) => {
    if (message.length + tag.length <= characterLimit) {
      setMessage(message + tag);
      console.log(message);
    }
  };

  const handleMessageChange = (event) => {
    if (event.target.value.length <= characterLimit) {
      setMessage(event.target.value);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Message</h2>
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message here"
        rows="10"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="text-right text-sm text-gray-500 mt-2">
        {characterLimit - message.length} characters remaining
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Dynamic Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {Object.keys(dynamicTags).map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              {dynamicTags[tag]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
