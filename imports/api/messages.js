import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import moment from "moment";
export const MessagesCollection = new Mongo.Collection("Messages");

if (Meteor.isServer) {
  Meteor.publish("messages.all", () => {
    return MessagesCollection.find();
  });
  Meteor.methods({
    "message.insert": (message) => {
      return MessagesCollection.insert(message);
    },
    "message.update": (_id, imageUrl) => {
      return MessagesCollection.update(
        { _id },
        {
          $set: {
            content: imageUrl,
          },
        }
      );
    },
  });
}

export const DummyMessages = [
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().subtract(2, "days").toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().subtract(2, "days").toDate(),
    type: "text",
  },
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().subtract(2, "days").toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().subtract(2, "days").toDate(),
    type: "text",
  },
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().subtract(1, "days").toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().subtract(1, "days").toDate(),
    type: "text",
  },
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().subtract(1, "days").toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().subtract(1, "days").toDate(),
    type: "text",
  },
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "9bvNA7P8yAhpXwwTd",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
  {
    chatId: "3XwjCYvwZSsBtPzZ4",
    content: "Salut ça va ?",
    createdAt: moment().toDate(),
    type: "text",
  },
];
