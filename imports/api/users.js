import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

if (Meteor.isServer) {
  Meteor.publish("users.all", () => {
    return Meteor.users.find(
      {},
      {
        fields: { service: 0 },
      }
    );
  });
}

Meteor.methods({
  "user.find": ({ username, password, phone }) => {
    const user = Accounts.findUserByUsername(username);
    console.log(user);

    if (user) {
      console.log("user existe", user);
      return true;
      //logger l'utilisateur
    } else {
      console.log("user doesn't exist");
      return Accounts.createUser({
        username,
        password,
        profile: {
          phone,
          actu: "Salut, j'utilise whatsapp",
          picture:
            "https://t3.ftcdn.net/jpg/01/09/00/64/240_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg",
        },
      });
      //creer l'utilisateur
    }
  },
});
