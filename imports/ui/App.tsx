import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ResolutionForm from "./ResolutionForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import GoalForm from "./GoalForm";
import Goal from "./resolutions/Goal";
import { Meteor } from "meteor/meteor";

const ResolutionsQuery = gql`
  query getData {
    resolutions {
      _id
      name
      goals {
        _id
        name
      }
    }

    user {
      _id
    }
  }
`;

const App: React.FC = () => {
  const { client, loading, error, data } = useQuery(ResolutionsQuery);

  if (loading) {
    return null;
  }

  if (error) {
    return <div>Error</div>;
  }

  const _logout = () => {
    Meteor.logout();
    client.resetStore();
  };

  const {
    resolutions,
    user: { _id: userId }
  } = data;
  return (
    <div>
      <h1>Hello World!</h1>

      {userId ? (
        <button onClick={_logout}>logout</button>
      ) : (
        <>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </>
      )}

      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>
            {resolution.name}
            <ul>
              {resolution.goals.map(goal => (
                <Goal goal={goal} key={goal._id} />
              ))}
            </ul>
            <GoalForm resolutionId={resolution._id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
