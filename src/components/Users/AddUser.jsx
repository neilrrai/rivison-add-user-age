import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {
  const [entredUsername, setEntredUsername] = useState("");
  const [entredAge, setEntredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(entredUsername, entredAge);
    setEntredAge("");
    setEntredUsername("");
  };
  const nameInputHandler = (event) => {
    // console.log(event.target.value);
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
