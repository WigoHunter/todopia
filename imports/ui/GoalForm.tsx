import * as React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { createGoal, createGoalVariables } from "../graphql/types/createGoal";

import { Input, Button } from "antd";

const CREATE_GOAL = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;

interface Props {
  resolutionId: string;
}

const GoalForm: React.FC<Props> = ({ resolutionId }) => {
  const [name, setName] = React.useState("");
  const [createGoal] = useMutation<createGoal, createGoalVariables>(
    CREATE_GOAL
  );

  const submitForm = () => {
    createGoal({
      variables: {
        name,
        resolutionId
      },
      refetchQueries: ["getData"]
    }).then(() => setName(""));
  };

  return (
    <div>
      <Input type="text" value={name} onChange={e => setName(e.target.value)} />
      <Button onClick={submitForm}>Submit</Button>
    </div>
  );
};

export default GoalForm;
