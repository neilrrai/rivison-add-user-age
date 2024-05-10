import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = (props) => {
  const [entredUsername, setEntredUsername] = useState("");
  const [entredAge, setEntredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (entredUsername.trim().length === 0 || entredAge < 1) return;
    props.onAddUser(entredUsername, entredAge);
    console.log(entredUsername, entredAge);
    setEntredAge("");
    setEntredUsername("");
  };
  const nameInputHandler = (event) => {
    setEntredUsername(event.target.value);
  };
  const ageInputhandler = (event) => {
    setEntredAge(event.target.value);
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={entredUsername}
          onChange={nameInputHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={entredAge}
          onChange={ageInputhandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
