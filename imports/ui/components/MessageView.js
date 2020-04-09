import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import StyledMessageView from "../elements/StyledMessageView";
import Header from "./Header";
import Avatar from "./Avatar";
import Footer from "./Footer";
import MessageBox from "./MessageBox";
import { MessagesCollection } from "../../api/messages";
import moment from "moment";

const icons = ["search", "paperclip", "ellipsis-v"];

const MessageView = ({ selectedChat, messages }) => {
  const handleSend = (content) => {
    const message = {
      chatId: selectedChat._id,
      content,
      createAt: moment().toDate(),
      senderId: Meteor.userId(),
      type: "text",
      read: false,
    };

    Meteor.call("message.insert", message, (err, res) => {
      if (err) {
        console.log("erreur insert", err);
      } else {
        // console.log("resulta insert", res);
      }
    });
  };

  return (
    <StyledMessageView>
      <Header iconClass="greyIcon" icons={icons}>
        <Avatar avatar_url={selectedChat.picture} />
        <div className="headerMsg--container">
          <span className="headerMsg--title">{selectedChat.title}</span>
          <span className="headerMsg--sbTitle">en ligne</span>
        </div>
      </Header>
      <MessageBox messages={messages} selectedChat={selectedChat} />
      <Footer onSend={handleSend} />
    </StyledMessageView>
  );
};

export default withTracker(({ selectedChat }) => {
  return {
    messages: MessagesCollection.find({ chatId: selectedChat._id }).fetch(),
  };
})(MessageView);
