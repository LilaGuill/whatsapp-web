import React from "react";
import StyledRight from "../elements/StyledRight";
import RightImg from "../components/RightImg";
import MessageView from "../components/MessageView";

const messageText =
  "Whatsapp se connecte à votre télephone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un wifi ";

const Right = ({ right, messageVisible, selectedChat }) => {
  return (
    <StyledRight>
      {messageVisible ? (
        <MessageView selectedChat={selectedChat} />
      ) : (
        <RightImg messageText={messageText} right={right} />
      )}
    </StyledRight>
  );
};

export default Right;
