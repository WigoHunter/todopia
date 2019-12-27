import Resolutions from "./resolutions";
import Goals from "../goals/goals";

export default {
  Query: {
    resolutions(parent, args, { user }) {
      if (user === undefined) {
        // return [];
        return Resolutions.find().fetch();
      }

      return Resolutions.find({
        userId: user._id
      }).fetch();
    }
  },

  Resolution: {
    goals: resolution => {
      const { _id: resolutionId } = resolution;
      return resolutionId ? Goals.find({ resolutionId }).fetch() : [];
    }
  },

  Mutation: {
    createResolution(parent, { name }, { user }) {
      const id = Resolutions.insert({
        name,
        userId: user._id || null
      } as any);

      return Resolutions.findOne(id);
    }
  }
};
