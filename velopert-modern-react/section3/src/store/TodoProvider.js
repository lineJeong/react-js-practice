import { useReducer, useRef } from "react";
import {
  TodoDispatchContext,
  TodoNextIdContext,
  TodoStateContext,
} from "./todo-context";

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

export const CREATE = "CREATE";
export const TOGGLE = "TOGGLE";
export const REMOVE = "REMOVE";

const todoReducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.todo];
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default TodoProvider;
