import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import history from "../history";

function NavigateSmaple() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const listenBackEvent = () => {
      if (window.confirm("정말 떠나실건가요?")) {
        // 확인 : 아무 처리 안해도 한페이지 뒤로 감
      } else {
        // 취소 : 현재 페이지에 머무르기 위한 코드 필요.. (원하는대로 작동하는데 적절한지 모르겠음)
        navigate("/navigate");
      }
    };

    const historyEvent = history.listen(({ action }) => {
      if (action === "POP") {
        listenBackEvent();
      }
    });

    return historyEvent;
  }, [navigate]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default NavigateSmaple;
