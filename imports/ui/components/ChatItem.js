import React from "react";
import StyledChatItem from "../elements/StyledChatItem";
import Avatar from "../components/Avatar";
import Moment from "react-moment";
import moment from "moment";
import FontAwesome from "react-fontawesome";

const ChatItem = ({
  title,
  picture,
  lastMessage,
  onChatClick,
  _id,
  active,
}) => {
  const { content, createAt, type } = lastMessage;

  const now = moment().format("D/MM/Y");
  const today = now === moment(createAt).format("D/MM/Y");

  return (
    <StyledChatItem active={active} onClick={() => onChatClick(_id)}>
      <Avatar large avatar_url={picture} />
      <div className="chat--contentContainer">
        <div className="content--line1">
          <span className="content--line1__title">{title}</span>
          <div className="content--line1__date">
            {today ? (
              <Moment format="HH:mm">{createAt}</Moment>
            ) : (
              <Moment format="D/MM/Y">{createAt}</Moment>
            )}
          </div>
        </div>
        <div className="content--line1">
          {type === "text" ? (
            <span className=" content--message">{content}</span>
          ) : (
            <span className=" content--message">
              <FontAwesome name="camera" style={{ marginRight: "0.4rem" }} />
              photo
            </span>
          )}

          <div className="chat--badge">4</div>
        </div>
      </div>
    </StyledChatItem>
  );
};

export default ChatItem;
