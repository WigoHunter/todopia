import Goals from "./goals";

export default {
  Mutation: {
    createGoal(parent, { name, resolutionId }) {
      const goalId = Goals.insert({
        name,
        resolutionId,
        completed: false
      } as any);

      return Goals.findOne(goalId);
    }
  }
};
