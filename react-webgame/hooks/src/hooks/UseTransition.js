import React, { useCallback, useEffect, useState, useTransition } from "react";

// useTransition, useDeferredValue : 실행 순서를 뒤로 미룰 수 있음
function UseTransition() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  // 바로 업데이트 되어야 할 것과 나중에 업데이트 되어야 할 것(result)을 구분해서 바로 업데이트 하지 않아도 될 것을 useTransition로 처리

  // name : 바로 업데이트 되어야 할 것 (input 창에 타이핑 할 때마다 업데이트)
  // result: 나중에 업데이트 되어야 할 것 (바로 업되이트 되지 않아도 되는 결과창은 실행 순서를 딜레이 시켜 성능 최적화)
  const [loading, startTransition] = useTransition();

  const onChange = useCallback((e) => {
    setName(e.target.value);
    startTransition(() => {
      setResult(e.target.value + "의 결과");
    });
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
      {loading ? <div>로딩중...</div> : null}
      {name
        ? Array(1000)
            .fill()
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </div>
  );
}

export default UseTransition;
