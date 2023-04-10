// 프리젠테이셔널 컴포넌트와 컨테이너 컴포넌트 분리 - 재사용성
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

import Counter from "../components/Counter";

function CounterContainer() {
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
