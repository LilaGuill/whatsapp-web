import React from "react";
import StyledChatList from "../elements/StyledChatList";
import ChatItem from "./ChatItem";

const ChatList = ({ chats }) => {
  const renderChats = () => {
    return chats.map((chat, index) => {
      return <ChatItem key={chat._id} {...chat} />;
    });
  };
  return <StyledChatList>{renderChats()}</StyledChatList>;
};

export default ChatList;
