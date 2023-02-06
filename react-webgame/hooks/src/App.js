import UseDeferredValue from "./hooks/UseDeferredValue";
import UseLayoutEffect from "./hooks/UseLayoutEffect";
import UseTransition from "./hooks/UseTransition";

function App() {
  return (
    <>
      <h2>useLayoutEffet</h2>
      <UseLayoutEffect />
      <h2>useTransition</h2>
      <UseTransition />
      <h2>useDeferredValue</h2>
      <UseDeferredValue />
    </>
  );
}

export default App;
