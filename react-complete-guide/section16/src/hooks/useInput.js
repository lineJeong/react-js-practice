import { useReducer } from "react";

const initialInputState = { enteredValue: "", isTouched: false };

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, enteredValue: action.value };
    case "BLUR":
      return { ...state, isTouched: true };
    case "RESET":
      return initialInputState;
    default:
      return state;
  }
};

function useInput(validateValue) {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const { enteredValue, isTouched } = inputState;

  const isValid = validateValue(enteredValue);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setEnteredValue("");
    // setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
