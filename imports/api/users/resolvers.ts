import Resolution from "../resolutions/resolutions";

export default {
  Query: {
    user(parent, args, { user }) {
      return user || {};
    }
  },

  User: {
    email: user => (user.emails ? user.emails[0].address : null),
    resolutions: user =>
      user._id ? Resolution.find({ userId: user._id }).fetch() : []
  }
};
