import { Meteor } from "meteor/meteor";
import "../imports/api/users";
import { ChatsCollection, dummyChats } from "../imports/api/chats";
import { createDummyChats, createDummyMessages } from "../imports/api/helpers";
import { MessagesCollection, DummyMessages } from "../imports/api/messages";

Meteor.startup(() => {
  const numberOfUsers = Meteor.users.find().count();
  const numberOfChats = ChatsCollection.find().count();
  const numberOfMessages = MessagesCollection.find().count();

  if (numberOfUsers === 0) {
    console.log("Il n'y a pas d'utilisateurs");
    // Accounts.createUser({
    //   username: "Chloé",
    //   password: "password",
    //   profile: { phone: "0945677889" },
    // });
  } else {
    console.log("Il y a des utilisateurs");
  }

  if (numberOfChats === 0) {
    console.log("Il n'y a pas de chat");

    // createDummyChats(dummyChats);
    // Accounts.createUser({
    //   username: "Chloé",
    //   password: "password",
    //   profile: { phone: "0945677889" },
    // });
  } else {
    console.log("Il y a des chats");
  }

  if (numberOfMessages === 0) {
    console.log("Il n'y a pas de Message");
    createDummyMessages(DummyMessages);

    // createDummyChats(dummyChats);
    // Accounts.createUser({
    //   username: "Chloé",
    //   password: "password",
    //   profile: { phone: "0945677889" },
    // });
  } else {
    console.log("Il y a des Messages");
  }
});
