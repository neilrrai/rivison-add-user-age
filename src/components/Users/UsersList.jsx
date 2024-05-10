import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

function UsersList(props) {
  return (
    <Card className={"users"}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
