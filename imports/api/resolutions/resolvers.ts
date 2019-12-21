import Resolutions from "./resolutions";

export default {
  Query: {
    resolutions(parent, args, context) {
      console.log(context);
      return Resolutions.find().fetch();
    }
  },

  Mutation: {
    createResolution(parent, { name }, context) {
      const id = Resolutions.insert({
        name
      } as any);

      return Resolutions.findOne(id);
    }
  }
};
