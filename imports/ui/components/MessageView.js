import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import StyledMessageView from "../elements/StyledMessageView";
import Header from "./Header";
import Avatar from "./Avatar";
import Footer from "./Footer";
import MessageBox from "./MessageBox";
import { MessagesCollection } from "../../api/messages";
import Modal from "./Modal";
import moment from "moment";

let fileInput;

const MessageView = ({ selectedChat, messages }) => {
  const [fabVisible, setFabVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const icons = [
    { name: "search", func: () => {} },
    {
      name: "paperclip",
      func: () => {
        console.log("fonction appeleé");
        setFabVisible(!fabVisible);
        console.log(fabVisible);
      },
    },
    { name: "ellipsis-v", func: () => {} },
  ];

  const handleInputClick = () => {
    const myInput = document.getElementById("fileUpload");
    console.log("click ok", myInput);
    myInput.click();
  };

  const handleInputChange = (event) => {
    fileInput = event.target.files[0];
    console.log(fileInput);
    if (fileInput) {
      setModalVisible(true);

      // permet d'acceder
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        console.log("image", e.target.result);
        setSelectedImage(e.target.result);
      };

      fileReader.readAsDataURL(fileInput);
    }
  };

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

  const handleClose = () => {
    setModalVisible(false);
    setFabVisible(false);
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

      {modalVisible ? (
        <Modal onClose={handleClose} selectedImage={selectedImage} />
      ) : (
        <>
          <MessageBox
            messages={messages}
            selectedChat={selectedChat}
            fabVisible={fabVisible}
            onInputChange={handleInputChange}
            onFABItemClick={handleInputClick}
          />
          <Footer onSend={handleSend} />
        </>
      )}
    </StyledMessageView>
  );
};

export default withTracker(({ selectedChat }) => {
  return {
    messages: MessagesCollection.find({ chatId: selectedChat._id }).fetch(),
  };
})(MessageView);
