// Context 에서 상태 관리가 필요한 경우 (3)
// 값과 업데이트 함수를 두개의 Context로 분리하기 - 불필요한 리렌더링을 막아 최적화
import { createContext, useContext, useMemo, useState } from "react";

const CounterValueContext = createContext();
const CounterActionsContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(1);

  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    []
  );

  return (
    <CounterValueContext.Provider value={counter}>
      <CounterActionsContext.Provider value={actions}>
        {children}
      </CounterActionsContext.Provider>
    </CounterValueContext.Provider>
  );
}

function useCounterValue() {
  const value = useContext(CounterValueContext);
  if (value === undefined) {
    throw new Error("useCounterValue should be used within CounterProvider");
  }
  return value;
}

function useCounterActions() {
  const value = useContext(CounterActionsContext);
  if (value === undefined) {
    throw new Error("useCounterActions should be used within CounterProvider");
  }
  return value;
}

function Fifth() {
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
  console.log("Value");
  const counter = useCounterValue();
  return <h1>{counter}</h1>;
}

// 이제 +, - 버튼을 눌러도 Value 컴포넌트만 리렌더링되고, Buttons 컴포넌트는 리렌더링 되지 않음
function Buttons() {
  console.log("Buttons");
  const actions = useCounterActions();
  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}

export default Fifth;
