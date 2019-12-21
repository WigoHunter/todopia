import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ResolutionForm from "./ResolutionForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { Meteor } from "meteor/meteor";

const hiQuery = gql`
  query getData {
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
      <RegisterForm />
      <LoginForm />
      <ResolutionForm />
      <button onClick={() => Meteor.logout()}>logout</button>
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
