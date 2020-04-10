import React, { useState } from "react";
import StyledFooter from "../elements/StyledFooter";
import FontAwesonme from "react-fontawesome";

const Footer = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");
  const [iconName, setIconName] = useState("microphone");

  const handleChange = (event) => {
    if (event.target.value) {
      setIconName("paper-plane");
    } else {
      setIconName("microphone");
    }
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (iconName === "microphone") {
      return;
    }
    onSend(inputValue);
    setInputValue("");
    setIconName("microphone");
  };
  return (
    <StyledFooter>
      <FontAwesonme className="iconFooter" name="smile" />

      <label className="message--label">
        <input
          className="message--input"
          placeholder="Taper un message"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <FontAwesonme
        className="iconFooter"
        name={iconName}
        onClick={handleClick}
      />
    </StyledFooter>
  );
};

export default Footer;
