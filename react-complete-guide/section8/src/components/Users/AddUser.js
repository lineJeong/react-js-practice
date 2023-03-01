import useInputs from "../../hooks/useInputs";

function AddUser() {
  const [{ username, age }, onChange, onReset] = useInputs({
    username: "",
    age: 0,
  });

  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
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
  );
}

export default AddUser;
