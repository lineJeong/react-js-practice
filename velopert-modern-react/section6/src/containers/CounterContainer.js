// 프리젠테이셔널 컴포넌트와 컨테이너 컴포넌트 분리 - 재사용성
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

import Counter from "../components/Counter";

function CounterContainer() {
  // 3) shallowEqual
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  // 2) useSelector 를 여러번 사용하기
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);

  // 1) 비구조화 할당으로 가져오기
  // const { number, diff } = useSelector((state) => state.counter);

  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));
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
