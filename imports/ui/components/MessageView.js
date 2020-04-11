import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Tracker } from "meteor/tracker";
import { Session } from "meteor/session";
import StyledMessageView from "../elements/StyledMessageView";
import Header from "./Header";
import Avatar from "./Avatar";
import Footer from "./Footer";
import MessageBox from "./MessageBox";
import { MessagesCollection } from "../../api/messages";
import Modal from "./Modal";
import moment from "moment";
import { uploadFile, findOtherUser, findOtherId } from "../../api/helpers";

let fileInput = "";

const MessageView = ({ selectedChat, messages, onAvatarClick, OPvisible }) => {
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
  const avatarClick = () => {
    const otherId = findOtherId(selectedChat.participants);
    onAvatarClick(otherId);
  };
  const handleInputChange = (event) => {
    fileInput = event.target.files[0];
    if (fileInput) {
      setModalVisible(true);

      // permet d'acceder
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      fileReader.readAsDataURL(fileInput);
    }
  };

  const handleSend = (content, type) => {
    const message = {
      chatId: selectedChat._id,
      content,
      createAt: moment().toDate(),
      senderId: Meteor.userId(),
      type,
      read: false,
    };

    if (modalVisible) {
      setModalVisible(false);
    }
    Meteor.call("message.insert", message, (err, id) => {
      console.log("call", message);
      if (err) {
        console.log("erreur insert", err);
      } else {
        console.log(id);
        uploadFile(fileInput);

        Tracker.autorun(() => {
          const imageUrl = Session.get("wwc__imageUrl");

          if (imageUrl && type === "image") {
            console.log("URL AUTORUN", id, imageUrl);
            Meteor.call("message.update", id, imageUrl, (err, res) => {
              if (err) {
                console.log(err);
              } else {
                console.log(res);
              }
            });
          }
        });
      }
    });
  };

  const handleClose = () => {
    setModalVisible(false);
    setFabVisible(false);
  };

  return (
    <StyledMessageView>
      <Header iconClass="greyIcon" icons={icons} OPvisible={OPvisible}>
        <Avatar avatar_url={selectedChat.picture} onAvatarClick={avatarClick} />
        <div className="headerMsg--container">
          <span className="headerMsg--title">{selectedChat.title}</span>
          <span className="headerMsg--sbTitle">en ligne</span>
        </div>
      </Header>

      {modalVisible ? (
        <Modal
          onClose={handleClose}
          selectedImage={selectedImage}
          onUpload={handleSend}
        />
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
