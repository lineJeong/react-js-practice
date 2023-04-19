import { useState } from "react";

function useSimpleInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const inputChangeHandler = (event) => {
    if (typeof initialValue === "object") {
      const { name, value } = event.target;
      setValue((prev) => ({ ...prev, [name]: value }));
    } else {
      setValue(event.target.value);
    }
  };
  const reset = () => {
    setValue(initialValue);
  };

  return { value, inputChangeHandler, reset };
}

export default useSimpleInput;
