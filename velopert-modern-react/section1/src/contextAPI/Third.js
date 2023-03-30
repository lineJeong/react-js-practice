// Context 에서 상태 관리가 필요한 경우 (1)
import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const CounterState = useState(1);

  return (
    <CounterContext.Provider value={CounterState}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounterState() {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  }
  return value;
}

function Third() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
}

function Value() {
  const [value] = useCounterState();

  return <h1>{value}</h1>;
}

function Buttons() {
  const [, setValue] = useCounterState();
  const increase = () => setValue((prev) => prev + 1);
  const decrease = () => setValue((prev) => prev - 1);

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Third;
