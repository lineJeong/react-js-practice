import { UsersProvider } from "./store/UsersContext";
import Users from "./Users";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
