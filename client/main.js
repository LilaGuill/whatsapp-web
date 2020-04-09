import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";

import App from "../imports/ui/App.js";

Meteor.startup(() => {
  Tracker.autorun(() => {
    const userReady = Meteor.subscribe("users.all").ready();
    if (userReady) {
      render(<App />, document.getElementById("render-target"));
    } else {
      // console.log("User not ready");
    }
  });
});
