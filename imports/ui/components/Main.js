import React from "react";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { ChatsCollection } from "../../api/chats";
import Right from "./Right";
import Left from "./Left";
import StyledMain from "../elements/StyledMain";
import { findChats } from "../../api/helpers";

const Main = () => {
  Tracker.autorun(() => {
    Meteor.subscribe("chats.mine", (id = Meteor.userId()));
  });

  return (
    <StyledMain>
      <Left chats={findChats()} />
      <Right />
    </StyledMain>
  );
};

export default Main;
