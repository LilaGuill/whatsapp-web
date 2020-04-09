import React from "react";
import StyledChatList from "../elements/StyledChatList";
import ChatItem from "./ChatItem";

const ChatList = ({ chats, onChatClick, selectedChat }) => {
  const renderChats = () => {
    return chats.map((chat, index) => {
      const active = selectedChat._id === chat._id;
      return (
        <ChatItem
          key={chat._id}
          {...chat}
          onChatClick={onChatClick}
          active={active}
        />
      );
    });
  };
  return <StyledChatList>{renderChats()}</StyledChatList>;
};

export default ChatList;
