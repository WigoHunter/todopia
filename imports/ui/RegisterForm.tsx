import * as React from "react";
import { Accounts } from "meteor/accounts-base";

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const registerUser = e => {
    e.preventDefault();

    Accounts.createUser(
      {
        email,
        password
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <form onSubmit={registerUser}>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
