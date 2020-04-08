import React from "react";
import { Meteor } from "meteor/meteor";
import { useHistory } from "react-router-dom";
import RightImg from "./RightImg";
import FormLogin from "./FormLogin";

const Login = () => {
  const history = useHistory();
  const messageText = "Connectez vous afin de lancer une conversation";

  const handleLogin = (fields) => {
    const { password, username } = fields;
    Meteor.call("user.find", fields, (err, res) => {
      if (err) {
        console.log("erreur", err);
      } else {
        console.log("resultat", res);
        //la connexion se fait coté client pas server
        Meteor.loginWithPassword(username, password, (err) => {
          if (err) {
            console.log("erreur", err);
          } else {
            console.log("resultat OK");
            history.push("/chats");
          }
        });
      }
    });
  };

  return (
    <RightImg messageText={messageText}>
      <FormLogin login={handleLogin} />
    </RightImg>
  );
};

export default Login;
