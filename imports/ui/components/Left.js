import React from "react";
import { Meteor } from "meteor/meteor";
import StyledLeft from "../elements/StyledLeft";
import Header from "./Header";
import Avatar from "./Avatar";
import Status from "./Status";
import SearchBar from "./SearchBar";
import ChatList from "./ChatList";

const icons = [
  {
    name: "circle-notch",
    func: () => {},
  },
  {
    name: "comment-alt",
    func: () => {},
  },
  {
    name: "ellipsis-v",
    func: () => {},
  },
];

const Left = ({ chats, onChatClick, selectedChat }) => {
  return (
    <StyledLeft>
      <Header icons={icons} iconClass="greyIcon">
        <Avatar avatar_url={Meteor.user().profile.picture} />
      </Header>
      <Status />
      <SearchBar />
      <ChatList
        chats={chats}
        onChatClick={onChatClick}
        selectedChat={selectedChat}
      />
    </StyledLeft>
  );
};

export default Left;
