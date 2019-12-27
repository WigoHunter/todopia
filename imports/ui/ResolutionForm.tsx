import * as React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import {
  createResolution,
  createResolutionVariables
} from "../graphql/types/createResolution";

const CREATE_RESOLUTION = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

const ResolutionForm = () => {
  const [name, setName] = React.useState("");
  const [createResolution] = useMutation<
    createResolution,
    createResolutionVariables
  >(CREATE_RESOLUTION);

  const submitForm = () => {
    createResolution({
      variables: {
        name
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

export default ResolutionForm;
