import * as React from "react";
import { Meteor } from "meteor/meteor";

const LoginForm = ({ client }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginUser = e => {
    e.preventDefault();

    Meteor.loginWithPassword(email, password, error => {
      console.log(error);

      if (!error) {
        client.resetStore();
      }
    });
  };

  return (
    <form onSubmit={loginUser}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
