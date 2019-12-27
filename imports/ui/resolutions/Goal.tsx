import * as React from "react";

const Goal = ({ goal }) => {
  return (
    <li>
      <input type="checkbox" />
      {goal.name}
    </li>
  );
};

export default Goal;
