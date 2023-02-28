// 24. 클래스형 컴포넌트
import HelloF from "./Hello-func";
import HelloC from "./Hello-class";
import CounterF from "./Counter-func";
import CounterC from "./Counter-class";

function Lecture24() {
  return (
    <>
      <CounterF />
      <CounterC />
      <HelloF color="green" name="함수형" isSpecial />
      <HelloC color="green" name="클래스형" isSpecial />
    </>
  );
}

export default Lecture24;
