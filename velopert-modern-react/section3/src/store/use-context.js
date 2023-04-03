import { useContext } from "react";
import {
  TodoDispatchContext,
  TodoNextIdContext,
  TodoStateContext,
} from "./todo-context";

export const useTodoState = () => {
  const value = useContext(TodoStateContext);
  if (value === undefined) {
    throw new Error("useTodoState should be used within TodoStateProvider");
  }
  return value;
};

export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);
  if (value === undefined) {
    throw new Error(
      "useTodoDispatch should be used within TodoActionsProvider"
    );
  }
  return value;
};

export const useTodoNextId = () => {
  const value = useContext(TodoNextIdContext);
  if (value === undefined) {
    throw new Error("useTodoNextId should be used within TodoNextIdProvider");
  }
  return value;
};
