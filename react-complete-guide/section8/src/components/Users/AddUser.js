import useInputs from "../../hooks/useInputs";

import styles from "./AddUser.module.css";
import Card from "../UI/Card";

function AddUser() {
  const [{ username, age }, onChange, onReset] = useInputs({
    username: "",
    age: 0,
  });

  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onChange}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={onChange}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
