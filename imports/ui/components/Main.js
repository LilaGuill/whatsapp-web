import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import _ from "lodash";
import Right from "./Right";
import Left from "./Left";
import { withTracker } from "meteor/react-meteor-data";
import StyledMain from "../elements/StyledMain";
import { findChats } from "../../api/helpers";
import OtherPofile from "./OtherProfile";

const Main = ({ loading, chats }) => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [selectedChat, setSelectedChat] = useState({});
  const [OPvisible, setOPVisible] = useState(false);
  const [otherId, setOtherId] = useState("");

  const handleChatClick = (_id) => {
    if (!messageVisible) {
      setMessageVisible(true);
    }
    const newChat = _.find(chats, { _id });
    setSelectedChat(newChat);
  };

  const handleAvatarClick = (otherId) => {
    setOPVisible(true);
    setOtherId(otherId);
  };

  const handleAvatarClose = () => {
    setOPVisible(false);
    setOtherId();
  };
  return (
    <StyledMain>
      {!loading ? (
        <>
          <Left
            OPvisible={OPvisible}
            chats={chats}
            onChatClick={handleChatClick}
            selectedChat={selectedChat}
          />
          <Right
            OPvisible={OPvisible}
            right
            messageVisible={messageVisible}
            selectedChat={selectedChat}
            onAvatarClick={handleAvatarClick}
          />
          {OPvisible && (
            <OtherPofile otherUserId={otherId} onClose={handleAvatarClose} />
          )}
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
