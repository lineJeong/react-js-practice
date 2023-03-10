import { useState, useCallback } from "react";

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onReset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, onReset];
}

export default useInputs;
