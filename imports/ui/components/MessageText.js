import React from "react";
import FontAwesome from "react-fontawesome";
import Moment from "react-moment";
import FlipMove from "react-flip-move";

const MessageText = ({ content, msgClass, ownership, createAt }) => {
  return (
    <div className="messageContainer">
      <div className={msgClass}>
        <p>{content}</p>
        <div className="detailsContainer">
          <Moment format="HH:mm">{createAt}</Moment>

          {ownership === "mine" && <FontAwesome name="check-double" />}
        </div>
      </div>
    </div>
  );
};

export default MessageText;
