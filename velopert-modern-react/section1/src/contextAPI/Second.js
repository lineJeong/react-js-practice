import { createContext, useContext } from "react";

const MyContext = createContext();

// Custom Hook
function useMyContext() {
  const value = useContext(MyContext);
  if (value === undefined) {
    throw new Error("useMyContext should be used within MyContext.Provider");
  }
  return useContext(MyContext);
}

function Second() {
  return (
    <MyContext.Provider value="second message">
      <AwesomeComponent />
    </MyContext.Provider>
  );
}

function AwesomeComponent() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

function FirstComponent() {
  const value = useMyContext();
  return <div>{value}</div>;
}

function SecondComponent() {
  const value = useMyContext();
  return <div>{value}</div>;
}

function ThirdComponent() {
  const value = useMyContext();
  return <div>{value}</div>;
}

export default Second;
