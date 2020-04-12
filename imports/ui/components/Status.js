import React from "react";
import StyledStatus from "../elements/StyledStatus";
import StyledAvatar from "../elements/StyledAvatar";
import FontAwesome from "react-fontawesome";

const Status = () => {
  return (
    <StyledStatus color="blue">
      <StyledAvatar>
        <FontAwesome name="bell-slash" size="2x" className="icon--color" />
      </StyledAvatar>
      <div className="status--textContainer">
        <div className="text--big">Etre averti(e) de nouveaux messages.</div>
        <span className="text--small">
          Afficher les notification sur le bureau
        </span>
      </div>
    </StyledStatus>
  );
};

export default Status;
