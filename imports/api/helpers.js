import { ChatsCollection } from "./chats";
import { MessagesCollection } from "./messages";
import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";
import { ImagesCollection } from "./images";

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
      const lastMessage = findLastMessage(chatCollection._id);

      return {
        ...chatCollection,
        title: username,
        picture: profile.picture,
        lastMessage: { ...lastMessage },
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

const findLastMessage = (chatId) => {
  return MessagesCollection.find(
    { chatId },
    { sort: { createAt: -1 } }
  ).fetch()[0];
};

export const uploadFile = (file) => {
  const fileUpload = ImagesCollection.insert(
    {
      file,
      streams: "dynamic",
      chunkSize: "dynamic",
      allowWebWorkers: true,
    },
    false
  );

  fileUpload.on("start", () => {
    console.log("start");
  });

  fileUpload.on("end", (err, fileObj) => {
    console.log("end", fileObj);
    if (err) {
      console.log("err upload", err);
    } else {
      const _id = fileObj._id;
      Meteor.call("images.url", _id, (err, url) => {
        if (err) {
          console.log(err);
        } else {
          console.log(url);
          Session.set("wwc__imageUrl", url);
        }
      });
    }
  });

  fileUpload.on("err", (err, fileObj) => {
    console.log("err", err);
  });

  fileUpload.on("progress", (progress) => {
    console.log("progress", progress);
  });

  fileUpload.start();
};
