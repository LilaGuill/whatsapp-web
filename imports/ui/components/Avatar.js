import React from "react";
import StyledAvatar from "../elements/StyledAvatar";

const Avatar = ({ avatar_url, onAvatarClick }) => {
  return (
    <StyledAvatar>
      <img
        src={avatar_url}
        alt="avatar"
        className="avatar--img"
        onClick={onAvatarClick}
      />
    </StyledAvatar>
  );
};

export default Avatar;
