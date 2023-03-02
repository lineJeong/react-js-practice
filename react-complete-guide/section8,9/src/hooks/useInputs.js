import { useCallback, useState } from "react";

const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }, []);

  const onReset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, onReset];
};

export default useInputs;
