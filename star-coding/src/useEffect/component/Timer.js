import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer 돌아가는 중");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("timer 종료");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요</span>
    </div>
  );
}

export default Timer;
