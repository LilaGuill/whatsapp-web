import React, { Children } from "react";
import FontAwesome from "react-fontawesome";

const FABItem = ({ iconName, children, bg, onClick }) => {
  const setBg = () => {
    switch (bg) {
      case "violet":
        return {
          background: "#BF59CF",
        };
    }
  };

  return (
    <div onClick={onClick} style={setBg()} className="fab">
      <FontAwesome className="fab--icon" name={iconName} />
      {children}
    </div>
  );
};

export default FABItem;
