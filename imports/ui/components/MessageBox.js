import React from "react";
import _ from "lodash";
import StyledMessageBox from "../elements/StyledMessageBox";
import { Meteor } from "meteor/meteor";
import moment from "moment";
import Day from "./Day";
import MessageText from "./MessageText";

const MessageBox = ({ messages }) => {
  let isEven = false;
  const format = "D MMMM Y";
  //renvoie un tableau
  messages.forEach((message) => {
    if (!message.senderId) {
      message.ownership = !!message.ownership === isEven ? "mine" : "other";
      isEven = !isEven;

      return message;
    } else {
      message.ownership = message.senderId === Meteor.userId ? "mine" : "other";
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
      return (
        <MessageText
          key={message._id}
          content={message.content}
          msgClass={msgClass}
          ownership={message.ownership}
        />
      );
    });
  };

  const renderDays = () => {
    return newMessages.map((newMessage, index) => {
      const date = newMessage.today ? "Aujoud'hui" : newMessage.date;
      return (
        <div key={index}>
          <Day date={date} />

          {renderMessages(newMessage)}
        </div>
      );
    });
  };

  return <StyledMessageBox>{renderDays()}</StyledMessageBox>;
};

export default MessageBox;
