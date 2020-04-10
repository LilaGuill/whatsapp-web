import React from "react";
import StyledFABs from "../elements/StyledFABs";
import FABItem from "../components/FABItem";

const FABs = ({ fabVisible, onInputChange, onFABItemClick }) => {
  return (
    <StyledFABs fabVisible={fabVisible}>
      <FABItem onClick={onFABItemClick} bg="violet" iconName="image">
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          onChange={onInputChange}
        />
      </FABItem>
    </StyledFABs>
  );
};

export default FABs;
