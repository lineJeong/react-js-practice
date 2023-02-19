// Context 에서 상태 관리가 필요한 경우 (2)
// 데이터를 어떻게 업데이트할 지에 대한 로직을 컴포넌트가 아니라 Provider단에서 구현하기
import { createContext, useContext, useMemo, useState } from "react";

const CounterContext = createContext();

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

  const value = useMemo(() => [counter, actions], [counter, actions]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

function useCounter() {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  }
  return value;
}

function Fourth() {
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
  const [counter] = useCounter();
  return <h1>{counter}</h1>;
}

// 현재 코드에서는 버튼을 누르면 Value 컴포넌트에 있는 상태값만 변하는데 Buttons 컴포넌트도 리렌더링 됨
// value를 useMemo로 감싸줬지만, counter가 바뀔 때마다 새로운 배열을 만들어서 반환함 (의존성 배열에 있는 counter 때문에)
// useContext에선 이를 감지하여 리렌더링 => Buttons 컴포넌트까지 리렌더링 발생하게 되는 것
function Buttons() {
  console.log("Buttons");
  const [, actions] = useCounter();
  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}

export default Fourth;
