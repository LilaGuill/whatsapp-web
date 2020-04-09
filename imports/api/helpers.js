import { ChatsCollection } from "./chats";
import { MessagesCollection } from "./messages";
import { Meteor } from "meteor/meteor";

export const createDummyChats = (chats) => {
  chats.forEach((chat) => {
    ChatsCollection.insert(chat);
  });
};

export const createDummyMessages = (messages) => {
  messages.forEach((message) => {
    MessagesCollection.insert(message);
  });
};

export const findChats = () => {
  return ChatsCollection.find()
    .fetch()
    .map((chatCollection) => {
      const otherUserId = findOtherId(chatCollection.participants);
      const { username, profile } = findOtherUser(otherUserId);

      return {
        ...chatCollection,
        title: username,
        picture: profile.picture,
      };
    });
};

//recherche l'id du deuxième participants
const findOtherId = (participants) => {
  const myId = Meteor.userId();
  let otherUserId;

  if (myId === participants[0]) {
    otherUserId = participants[1];
  } else {
    otherUserId = participants[0];
  }
  return otherUserId;
};

//
const findOtherUser = (_id) => {
  return Meteor.users.findOne({ _id });
};
