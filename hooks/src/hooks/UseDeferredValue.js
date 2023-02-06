import React, {
  useCallback,
  useEffect,
  useState,
  useDeferredValue,
  useMemo,
} from "react";

function UseDeferredValue() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useTransition처럶 선별적으로 업데이트를 딜레이 할 수 있음
  const deferredName = useDeferredValue(name);
  const result = useMemo(() => deferredName + "의 결과", [deferredName]);

  const onChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <div>{count}</div>
      <input value={name} onChange={onChange} />
      {deferredName
        ? Array(1000)
            .fill()
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </div>
  );
}

export default UseDeferredValue;
