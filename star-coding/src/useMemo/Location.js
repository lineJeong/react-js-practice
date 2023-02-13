import { useEffect, useMemo, useState } from "react";

function Location() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 객체는 컴포넌트가 랜더링될 때마다 새로운 주소값이 할당됨

  // location 내용과 관련없는 다른 상태인 number 상태가 변할 때도 랜더링 발생함
  // => 실제 location 내용이 바뀌지 않더라도, location에 새로운 주소값 할당됨
  // => 의존성 배열에는 location 뿐이지만 number 상태가 바뀔 때마다 useEffect 작동하게 됨

  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   };

  // useMemo를 사용해서 isKorea 상태가 변경될 때만 location 변수가 새로 할당되도록 함 => number 상태가 변경돼도 useEffect가 실헹되지 않음

  const location = useMemo(
    () => ({
      country: isKorea ? "한국" : "외국",
    }),
    [isKorea]
  );

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루 몇 끼?</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>이동</button>
    </div>
  );
}

export default Location;
