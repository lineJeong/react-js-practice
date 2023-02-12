import { useState, useReducer } from "react";

// reducer - state를 업데이트
// dispatch - state의 업데이트를 요구
// action - 요구 내용

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.number;
    case ACTION_TYPES.withdraw:
      return state - action.number;
    default:
      return state;
  }
};

function Bank() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  const onChange = (e) => {
    const { value } = e.target;
    if (value < 0) {
      return;
    }
    setNumber(parseInt(value));
  };

  const onReset = () => {
    setNumber(0);
  };

  const onDeposit = () => {
    dispatch({ type: ACTION_TYPES.deposit, number });
    onReset();
  };

  const onWithdraw = () => {
    dispatch({ type: ACTION_TYPES.withdraw, number });
    onReset();
  };

  return (
    <div>
      <h2>useReducer 은행</h2>
      <p>잔고: {money}원</p>
      <input type="number" value={number} onChange={onChange} step="1000" />
      <button onClick={onDeposit}>예금</button>
      <button onClick={onWithdraw}>출금</button>
    </div>
  );
}

export default Bank;
