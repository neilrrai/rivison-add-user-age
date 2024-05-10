// Write your code below:
import React from "react";
import Card from "../UI/Card";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event.tar);
  };
  return (
    <Card className={"input"}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <br />
        <input id="username" type="text" name="username"></input>
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input id="age" type="number" name="age"></input>
        <br />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
