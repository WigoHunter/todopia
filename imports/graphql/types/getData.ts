/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getData
// ====================================================

export interface getData_resolutions_goals {
  __typename: "Goal";
  _id: string | null;
  name: string | null;
  completed: boolean | null;
}

export interface getData_resolutions {
  __typename: "Resolution";
  _id: string;
  name: string;
  goals: (getData_resolutions_goals | null)[] | null;
}

export interface getData_user {
  __typename: "User";
  _id: string | null;
}

export interface getData {
  resolutions: (getData_resolutions | null)[] | null;
  user: getData_user | null;
}
