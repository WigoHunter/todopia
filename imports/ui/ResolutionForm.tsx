import * as React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const CREATE_RESOLUTION = gql`
  mutation createResolution {
    createResolution {
      _id
    }
  }
`;

const ResolutionForm = () => {
  const [name, setName] = React.useState("");
  const [createResolution, { data }] = useMutation(CREATE_RESOLUTION);

  const submitForm = () => {
    createResolution({});
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default ResolutionForm;
