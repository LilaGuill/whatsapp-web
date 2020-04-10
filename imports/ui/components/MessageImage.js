import React from "react";
import StyledMessageImage from "../elements/StyledMessageImage";
import FontAwesome from "react-fontawesome";
import Moment from "react-moment";

const MessageImage = ({ mine, content, createdAt }) => {
  const renderImage = () => {
    return (
      <>
        <img className="image" alt="img" src={content} />
        <div className="image--overlay">
          <div className="detailsContainer__date">
            <div className="image--date">
              <Moment format="HH:mm">{createdAt}</Moment>
            </div>
            {mine && (
              <FontAwesome style={{ color: "white" }} name="check-double" />
            )}
          </div>
        </div>
      </>
    );
  };

  return <StyledMessageImage mine={mine}>{renderImage()}</StyledMessageImage>;
};

export default MessageImage;
{
}
