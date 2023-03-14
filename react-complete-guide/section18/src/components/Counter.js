import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const { increment, increase, decrement, toggleCounter } = counterActions;

  const incrementHandler = () => {
    dispatch(increment());
  };
  const increaseHandler = (amount) => {
    dispatch(increase(amount));
    // dispatch({ type: "increment", amount });
  };
  const decrementHandler = () => {
    dispatch(decrement());
    // dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
    // dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
