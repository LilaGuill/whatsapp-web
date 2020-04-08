import React from "react";
import StyledRight from "../elements/StyledRight";
import RightImg from "../components/RightImg";

const messageText =
  "Whatsapp se connecte à votre télephone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un wifi ";

const Right = () => {
  return (
    <StyledRight>
      <RightImg messageText={messageText} right={true} />
    </StyledRight>
  );
};

export default Right;
