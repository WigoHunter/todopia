import * as React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

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
  const [createGoal] = useMutation(CREATE_GOAL);

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
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default GoalForm;
