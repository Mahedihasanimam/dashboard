'use client';
import { Input, Button } from "antd";
import { SendOutlined, CameraOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

// Initialize Socket.IO client
const socket = io('http://localhost:5000');


const ChatBubble = ({ isSender, message, time, image }) => {
  // Handle possible undefined image or message
  const messageContent = typeof message === 'string' ? message : 'Invalid message content';
  const imageUrl = typeof image === 'string' ? image : '';

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-4xl p-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl ${
          isSender
            ? "bg-[#F4B5BA] text-[#6A6A6A]"
            : "bg-[#B0E2EC] text-[#6A6A6A]"
        }`}
        style={{ wordBreak: "break-word" }}
      >
        {imageUrl && (
          <div className="mb-2">
            <Image
              src={imageUrl}
              alt="Chat Image"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        )}
        <p>{messageContent}</p>
        <div className="text-xs text-gray-600 mt-1">{time}</div>
      </div>
    </div>
  );
};



const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to the server');
    });

    socket.on('user profile', (profile) => {
      setUserProfile(profile);
    });

    socket.on('chat message', (newMessage) => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('connect');
      socket.off('user profile');
      socket.off('chat message');
    };
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result); // Base64 URL
      };
      reader.readAsDataURL(selectedFile); // Convert file to base64 URL
    }
  };

  const handleSend = () => {
    const messageData = {
      message: message.trim(),
      image: file || '', 
    };
    socket.emit('chat message', messageData);
    setMessage("");
    setFile(null);
  };

  return (
    <div className="flex flex-col justify-between p-4">
      <div className="flex-grow overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            isSender={msg.userId === socket.id}
            message={msg.message}
            time={new Date(msg.timestamp).toLocaleTimeString()}
            image={msg.image}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <Input
          placeholder="Type your message"
          className="rounded-md"
          size="large"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex items-center space-x-2">
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full"
          >
            <CameraOutlined />
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <Button type="primary" shape="circle" icon={<SendOutlined />} onClick={handleSend} />
      </div>
    </div>
  );
};


export default ChatComponent;
