import Resolutions from "./resolutions";

export default {
  Query: {
    resolutions(obj, args, context) {
      console.log(context);
      return Resolutions.find().fetch();
    }
  },

  Mutation: {
    createResolution(obj, { name }, ctx) {
      const id = Resolutions.insert({
        name
      } as any);

      return Resolutions.findOne(id);
    }
  }
};
