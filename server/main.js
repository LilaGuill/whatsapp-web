import { Meteor } from "meteor/meteor";
import "../imports/api/users";

Meteor.startup(() => {
  const numberOfUsers = Meteor.users.find().count();
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
});
