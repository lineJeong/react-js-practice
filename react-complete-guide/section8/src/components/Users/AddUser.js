import useInputs from "../../hooks/useInputs";

import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

function AddUser() {
  const [{ username, age }, onChange, onReset] = useInputs({
    username: "",
    age: 0,
  });

  const addUserHandler = (e) => {
    e.preventDefault();
    onReset();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" value={username} onChange={onChange} />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={age} onChange={onChange} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
