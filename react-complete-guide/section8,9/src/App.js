import { useRef, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const id = useRef(1);

  const addUserHandler = (username, age) => {
    const newUser = { id: id.current, username, age };
    setUsersList((prev) => [...prev, newUser]);
    id.current += 1;
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
