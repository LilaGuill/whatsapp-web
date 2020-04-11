import React from "react";
import StyledActu from "../elements/StyledActu";

const Actu = ({ actu, phone }) => {
  return (
    <StyledActu>
      <span className="actu--title">Actu et numéro de téléphone</span>
      <span className="actu--content">{actu}</span>
      <span className="actu--divider" />
      <span className="actu--phone">{phone}</span>
    </StyledActu>
  );
};

export default Actu;
