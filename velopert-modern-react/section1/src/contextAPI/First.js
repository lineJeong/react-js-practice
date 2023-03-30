import { createContext, useContext } from "react";

const MyContext = createContext();

function First() {
  return (
    <MyContext.Provider value="first message">
      <GrandParent />
    </MyContext.Provider>
  );
}

function GrandParent() {
  return <Parent />;
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  return <Message />;
}

function Message() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}

export default First;
