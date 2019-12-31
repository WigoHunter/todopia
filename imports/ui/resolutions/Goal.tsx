import * as React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import {
  toggleGoal as toggleGoalType,
  toggleGoalVariables
} from "../../graphql/types/toggleGoal";
import { goalFragment as goalFragmentType } from "../../graphql/types/goalFragment";

const TOGGLE_GOAL = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
      _id
    }
  }
`;

interface Props {
  goal: goalFragmentType;
}

const Goal: React.FC<Props> = ({ goal }) => {
  const [toggleGoal] = useMutation<toggleGoalType, toggleGoalVariables>(
    TOGGLE_GOAL
  );

  const _toggleGoal = () => {
    toggleGoal({
      variables: {
        id: goal._id
      },
      refetchQueries: ["getData"]
    });
  };

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => _toggleGoal()}
        checked={goal.completed}
      />
      {goal.name}
    </li>
  );
};

export const goalFragment = gql`
  fragment goalFragment on Goal {
    _id
    name
    completed
  }
`;

export default Goal;
