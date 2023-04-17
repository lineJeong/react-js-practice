const myLogger = (store) => (next) => (action) => {
  console.log(action);
  const result = next(action); // 미들웨어 (또는 리듀서)에 액션 전달

  console.log("\t", store.getState()); // '\t' => 탭 정규표현식

  return result; // dispatch(action) 결과, 기본: undefined
};

export default myLogger;
