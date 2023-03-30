import React, {
  useRef,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from "react";
import CreateUser from "../components/CreateUser";
import UserList from "../components/UserList-useContext";
import useInputs from "../hooks/useInputs";

const countActiveUsers = (users) => {
  return users.filter((user) => user.active).length;
};

const initialState = {
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

const CREATE_USER = "CREATE_USER";
const TOGGLE_USER = "TOGGLE_USER";
const REMOVE_USER = "REMOVE_USER";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        users: state.users.concat(action.user),
      };
    case TOGGLE_USER:
      return {
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case REMOVE_USER:
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

export const UserDispatch = createContext(null);

function CustomHooks() {
  const [{ username, email }, onChange, onReset] = useInputs({
    username: "",
    email: "",
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: CREATE_USER,
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    onReset();
    nextId.current += 1;
  }, [username, email, onReset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: TOGGLE_USER,
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: REMOVE_USER,
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default CustomHooks;
