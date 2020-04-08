import React from "react";
import { Meteor } from "meteor/meteor";
import StyledLeft from "../elements/StyledLeft";
import Header from "./Header";
import Avatar from "./Avatar";
import Status from "./Status";
import SearchBar from "./SearchBar";

const icons = ["circle-notch", "comment-alt", "ellipsis-v"];

const Left = () => {
  return (
    <StyledLeft>
      <Header icons={icons} iconClass="greyIcon">
        <Avatar avatar_url={Meteor.user().profile.picture} />
      </Header>
      <Status />
      <SearchBar />
    </StyledLeft>
  );
};

export default Left;
