// Context의 상태에서 배열이나 객체를 다루는 경우 (배열 / 할 일 목록)
import { createContext, useContext, useMemo, useRef, useState } from "react";

const TodosValueContext = createContext();
const TodosValueActions = createContext();

function TodosProvider({ children }) {
  const idRef = useRef(3);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "밥먹기",
      done: true,
    },
    {
      id: 2,
      text: "잠자기",
      done: false,
    },
  ]);

  const actions = useMemo(
    () => ({
      add(text) {
        const id = idRef.current;
        idRef.current += 1;
        setTodos((prev) => [...prev, { id, text, done: false }]);
      },
      toggle(id) {
        setTodos((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        );
      },
      remove(id) {
        setTodos((prev) => prev.filter((item) => item.id !== id));
      },
    }),
    []
  );

  return (
    <TodosValueContext.Provider value={todos}>
      <TodosValueActions.Provider value={actions}>
        {children}
      </TodosValueActions.Provider>
    </TodosValueContext.Provider>
  );
}

function useTodosValue() {
  const value = useContext(TodosValueContext);
  if (value === undefined) {
    throw new Error("useTodosValue should be used within TodosProvider");
  }
  return value;
}

function useTodosActions() {
  const value = useContext(TodosValueActions);
  if (value === undefined) {
    throw new Error("useTodosActions should be used within TodosProvider");
  }
  return value;
}

function Seventh() {
  return (
    <TodosProvider>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
}

function TodoForm() {
  const { add } = useTodosActions();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    add(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

function TodoList() {
  const todos = useTodosValue();

  return (
    <ul>
      {todos.map(({ id, text, done }) => (
        <Todo key={id} id={id} text={text} done={done} />
      ))}
    </ul>
  );
}

function Todo({ id, text, done }) {
  const { toggle, remove } = useTodosActions();

  const getToggleStyle = () => {
    switch (done) {
      case true:
        return {
          color: "gray",
          textDecoration: "line-through",
          cursor: "pointer",
        };
      default:
        return { color: "black", cursor: "pointer" };
    }
  };

  const handleToggle = () => {
    toggle(id);
  };

  const handleRemove = () => {
    remove(id);
  };

  return (
    <li>
      <span style={getToggleStyle()} onClick={handleToggle}>
        {text}
      </span>
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
}

export default Seventh;
