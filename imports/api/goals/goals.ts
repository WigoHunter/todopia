import { Mongo } from "meteor/mongo";

export interface Goal {
  _id: string;
  name: string;
  resolutionId: string;
  completed: boolean;
}

const Goals: Mongo.Collection<Goal> = new Mongo.Collection<Goal>("goals");

export default Goals;
