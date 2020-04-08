import React from "react";
import StyledRightImg from "../elements/StyledRightImg";

const RightImg = ({ right, messageText, children }) => {
  return (
    <StyledRightImg right={right}>
      <img
        alt="bg"
        className="rigthImg--image"
        src="./images/whatsapp-bg-1.jpg"
      ></img>
      <h3 className="rightImg--title">Gardez votre téléphone connecté</h3>

      <div className="rightImg--div">
        <p className="rightImg--p">{messageText}</p>
        <div className="rightImg--divider"></div>
      </div>
      {children}
    </StyledRightImg>
  );
};

export default RightImg;
