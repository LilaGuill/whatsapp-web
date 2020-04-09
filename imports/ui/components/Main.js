import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { ChatsCollection } from "../../api/chats";
import _ from "lodash";
import Right from "./Right";
import Left from "./Left";

import StyledMain from "../elements/StyledMain";
import { findChats } from "../../api/helpers";

const Main = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [selectedChat, setSelectedChat] = useState({});
  const [loading, setLoading] = useState(true);

  Tracker.autorun(() => {
    const chatsReady = Meteor.subscribe(
      "chats.mine",
      (id = Meteor.userId())
    ).ready();

    const messageReady = Meteor.subscribe("messages.all").ready;

    if (chatsReady && messageReady) {
      setLoading(false);
    }
  });

  const handleChatClick = (_id) => {
    // console.log("selected chat before", selectedChat);
    if (!messageVisible) {
      setMessageVisible(true);
    }
    const newChat = _.find(findChats(), { _id });
    // console.log("selected chat after", newChat);
    setSelectedChat(newChat);
  };
  return (
    <StyledMain>
      {!loading ? (
        <>
          <Left
            chats={findChats()}
            onChatClick={handleChatClick}
            selectedChat={selectedChat}
          />
          <Right
            right
            messageVisible={messageVisible}
            selectedChat={selectedChat}
          />
        </>
      ) : (
        <p>Loading</p>
      )}
    </StyledMain>
  );
};

export default Main;
