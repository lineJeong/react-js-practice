import useInputs from "../../hooks/useInputs";

import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function AddUser({ onAddUser }) {
  const [{ username, age }, onChange, onReset] = useInputs({
    username: "",
    age: "",
  });

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) return;
    if (+age < 1) return;
    onAddUser(username, age);
    onReset();
  };

  return (
    <>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
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
    </>
  );
}

export default AddUser;
