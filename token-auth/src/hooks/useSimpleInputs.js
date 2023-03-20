import { useState } from "react";

function useSimpleInputs(initialValue) {
  const [value, setValue] = useState(initialValue);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const reset = () => {
    setValue(initialValue);
  };

  return { value, inputChangeHandler, reset };
}

export default useSimpleInputs;
