import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(hiQuery);

  if (loading) {
    return null;
  }

  if (error) {
    return <div>Error</div>;
  }

  const { hi, resolutions } = data;
  return (
    <div>
      <h1>{hi}</h1>
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
