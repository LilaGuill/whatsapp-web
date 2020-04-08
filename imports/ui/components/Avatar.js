import React from "react";
import StyledAvatar from "../elements/StyledAvatar";

const Avatar = ({ avatar_url }) => {
  return (
    <StyledAvatar>
      <img src={avatar_url} alt="avatar" className="avatar--img" />
    </StyledAvatar>
  );
};

export default Avatar;
