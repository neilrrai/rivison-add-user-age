import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [entredUsername, setEntredUsername] = useState("");
  const [entredAge, setEntredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (entredUsername.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return;
    }
    if (entredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (> 0).",
      });
    }
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
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

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
    </div>
  );
};

export default AddUser;
