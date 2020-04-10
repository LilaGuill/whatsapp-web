import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import _ from "lodash";
import Right from "./Right";
import Left from "./Left";
import { withTracker } from "meteor/react-meteor-data";
import StyledMain from "../elements/StyledMain";
import { findChats } from "../../api/helpers";

const Main = ({ loading, chats }) => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [selectedChat, setSelectedChat] = useState({});

  const handleChatClick = (_id) => {
    if (!messageVisible) {
      setMessageVisible(true);
    }
    const newChat = _.find(chats, { _id });
    setSelectedChat(newChat);
  };
  return (
    <StyledMain>
      {!loading ? (
        <>
          <Left
            chats={chats}
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

export default withTracker(() => {
  const chatsReady = Meteor.subscribe(
    "chats.mine",
    (id = Meteor.userId())
  ).ready();
  const messageReady = Meteor.subscribe("messages.all").ready;
  return {
    loading: chatsReady && messageReady ? false : true,
    chats: findChats(),
  };
})(Main);
