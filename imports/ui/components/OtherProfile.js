import React from "react";
import StyledOtherProfile from "../elements/StyledOtherProfile";
import { findOtherUser } from "../../api/helpers";
import Header from "./Header";
import FontAwesome from "react-fontawesome";
import Avatar from "./Avatar";
import Actu from "./Actu";
import ActuItem from "./ActuItem";

const OtherProfil = ({ otherUserId, onClose }) => {
  const otherUser = findOtherUser(otherUserId);
  const icons = [{ name: "", func: () => {} }];

  return (
    <StyledOtherProfile>
      {otherUserId && (
        <>
          <Header iconClass="greyIcon" icons={icons}>
            <div className="OPH--heading">
              <FontAwesome
                name="times"
                className="iconOtherProfile"
                onClick={onClose}
              />
              <span className="OPH--title"></span>
            </div>
          </Header>
          <div className="__scroll">
            <div className="OP--imageConatiner">
              <Avatar avatar_url={otherUser.profile.picture} />
            </div>
            <div className="OPIC--textContainer">
              <span className="OPIC--title">{otherUser.username}</span>
            </div>
            <Actu
              actu={otherUser.profile.actu}
              phone={otherUser.profile.phone}
            />
            <ActuItem iconName="ban" content="Bloquer le contact" />
            <ActuItem
              iconName="thumbs-down"
              red
              content="Supprimer le contact"
            />
            <ActuItem iconName="trash" red content="Supprimer la discussion" />
          </div>
        </>
      )}
    </StyledOtherProfile>
  );
};

export default OtherProfil;
