import React from "react";
import FontAwesome from "react-fontawesome";

const MessageText = ({ content, msgClass, ownership }) => {
  return (
    <div className="messageContainer">
      <div className={msgClass}>
        <p>{content}</p>
        <div className="detailsContainer">
          <span>12:43</span>
          {ownership === "mine" && <FontAwesome name="check-double" />}
        </div>
      </div>
    </div>
  );
};

export default MessageText;
