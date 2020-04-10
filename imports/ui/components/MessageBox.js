import React, { useEffect } from "react";
import _ from "lodash";
import StyledMessageBox from "../elements/StyledMessageBox";
import { Meteor } from "meteor/meteor";
import moment from "moment";
import Day from "./Day";
import MessageText from "./MessageText";
import FlipMove from "react-flip-move";
import FABs from "./FABs";
import MessageImage from "../components/MessageImage";

const MessageBox = ({
  messages,
  selectedChat,
  fabVisible,
  onInputChange,
  onFABItemClick,
}) => {
  let isEven = false;
  const format = "D MMMM Y";
  let messagesEnd;
  //renvoie un tableau
  messages.forEach((message) => {
    if (!message.senderId) {
      message.ownership = !!message.ownership === isEven ? "mine" : "other";
      isEven = !isEven;
      return message;
    } else {
      message.ownership =
        message.senderId === Meteor.userId() ? "mine" : "other";
      return message;
    }
  });
  //renvoie un object
  const groupedMessages = _.groupBy(messages, (message) => {
    return moment(message.createdAt).format(format);
  });

  const newMessages = Object.keys(groupedMessages).map((key) => {
    return {
      date: key,
      groupedMessages: groupedMessages[key],
      today: moment().format(format) === key,
    };
  });

  const renderMessages = (newMessage) => {
    return newMessage.groupedMessages.map((message) => {
      const msgClass = `message message--${message.ownership}`;
      if (message.type === "image") {
        const mine = message.ownership === "mine";
        return (
          <MessageImage
            key={message._id}
            content={message.content}
            createdAt={message.createAt}
            mine={mine}
          />
        );
      } else {
        return (
          <MessageText
            key={message._id}
            content={message.content}
            msgClass={msgClass}
            ownership={message.ownership}
            createAt={message.createAt}
          />
        );
      }
    });
  };
  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat, messages]);

  const renderDays = () => {
    return newMessages.map((newMessage, index) => {
      const date = newMessage.today ? "Aujoud'hui" : newMessage.date;
      return (
        <div key={index}>
          <Day date={date} />

          {renderMessages(newMessage)}
          <div ref={(el) => (messagesEnd = el)} />
        </div>
      );
    });
  };

  return (
    <StyledMessageBox>
      <FABs
        fabVisible={fabVisible}
        onInputChange={onInputChange}
        onFABItemClick={onFABItemClick}
      />
      <FlipMove>{renderDays()}</FlipMove>
    </StyledMessageBox>
  );
};

export default MessageBox;
