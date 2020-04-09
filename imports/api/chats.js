import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import moment from "moment";

export const ChatsCollection = new Mongo.Collection("Chats");

export const dummyChats = [
  {
    title: "",
    picture: "",
    participants: ["WhfPh8mZDGfEbKBMi", "Xj9hAeuzR3BLs846z"],
    lastMessage: {
      content: "Salut, ca va ?",
      createAt: moment().toDate(),
    },
  },
  {
    title: "",
    picture: "",
    participants: ["94YQYuAs8vimSerSK", "WhfPh8mZDGfEbKBMi"],
    lastMessage: {
      content: "Salut, ca va ?",
      createAt: moment().subtract(1, "days").toDate(),
    },
  },
  {
    title: "",
    picture: "",
    participants: ["94YQYuAs8vimSerSK", "Xj9hAeuzR3BLs846z"],
    lastMessage: {
      content: "Salut, ca va ?",
      createAt: moment().subtract(2, "days").toDate(),
    },
  },
];

if (Meteor.isServer) {
  Meteor.publish("chats.all", () => {
    return ChatsCollection.find();
  });
  Meteor.publish("chats.mine", (id) => {
    return ChatsCollection.find({
      participants: { $in: [id] },
    });
  });
}
