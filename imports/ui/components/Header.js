import React from "react";
import StyledHeader from "../elements/StyledHeader";
import FontAwesonme from "react-fontawesome";

const Header = ({ icons, iconClass, iconsWidthSmall, children, OPvisible }) => {
  const renderIcons = () => {
    return icons.map((icon, index) => {
      return (
        <FontAwesonme
          key={index}
          className={iconClass}
          name={icon.name}
          onClick={icon.func}
        />
      );
    });
  };

  return (
    <StyledHeader OPvisible={OPvisible}>
      {children}
      <div className={iconsWidthSmall ? "icons--left small" : "icons--left"}>
        {renderIcons()}
      </div>
    </StyledHeader>
  );
};

export default Header;
