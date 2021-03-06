import React from "react";
import StyledActuItem from "../elements/StyledActuItem";
import FontAwesome from "react-fontawesome";

const ActuItem = ({ red, iconName, content }) => {
  return (
    <StyledActuItem red={red}>
      <FontAwesome className="AI--icon" name={iconName} size="xs" />
      <span style={{ fontSize: "16px" }}>{content}</span>
    </StyledActuItem>
  );
};

export default ActuItem;
