/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createGoal
// ====================================================

export interface createGoal_createGoal {
  __typename: "Goal";
  _id: string | null;
}

export interface createGoal {
  createGoal: createGoal_createGoal | null;
}

export interface createGoalVariables {
  name: string;
  resolutionId: string;
}
