import { useState } from "react";
import useInputs from "../../hooks/useInputs";

import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser({ onAddUser }) {
  const [{ username, age }, onChange, onReset] = useInputs({
    username: "",
    age: "",
  });
  const [error, setError] = useState(null);

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    onAddUser(username, age);
    onReset();
  };

  const errorHandler = (e) => {
    // const { target, currentTarget } = e;
    // if (target !== currentTarget) return;
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={onChange}
          />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" value={age} onChange={onChange} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
