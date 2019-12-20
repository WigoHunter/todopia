import Resolutions from "./resolutions";

export default {
  Query: {
    resolutions() {
      return Resolutions.find().fetch();
    }
  },

  Mutation: {
    createResolution() {
      console.log("got here!");
      //   const id = Resolutions.insert({
      //       name: "Testing"
      //   } as any)
    }
  }
};
