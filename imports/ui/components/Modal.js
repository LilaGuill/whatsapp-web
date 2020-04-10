import React from "react";
import StyledModal from "../elements/StyledModal";
import FontAwesone from "react-fontawesome";

const Modal = ({ selectedImage, onClose, onUpload }) => {
  return (
    <StyledModal>
      <div className="modal--header">
        <FontAwesone
          className="modal--header__icon"
          size="2x"
          name="times"
          onClick={onClose}
        />
        <span className="modal--header__title">Aperçu</span>
      </div>
      <div className="modal--body">
        <img
          style={{ width: "349px", height: "349px" }}
          alt="img"
          src={selectedImage}
        />

        <div
          onClick={() => onUpload("", (type = "image"))}
          className="modal--body__fab"
        >
          <FontAwesone name="paper-plane" size="3x" />
        </div>
      </div>
      <div className="modal--footer">
        <div className="modal--footer__box">
          <img
            style={{ width: "100%", height: "100%" }}
            alt="img"
            src={selectedImage}
          />
        </div>
        <div className="modal--footer__box">
          <FontAwesone name="plus" />
          <span>Ajouter</span>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
