import Resolution from "../resolutions/resolutions";
import { Meteor } from "meteor/meteor";

export default {
  Query: {
    user(parent, args, { user }) {
      return user || {};
    },

    users() {
      return Meteor.users.find().fetch();
    }
  },

  User: {
    email: user => (user.emails ? user.emails[0].address : null),
    resolutions: user =>
      user._id ? Resolution.find({ userId: user._id }).fetch() : []
  }
};
