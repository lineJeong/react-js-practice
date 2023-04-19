import { useNavigate } from "react-router-dom";
import { useAuthActions, useAuthValue } from "../store/use-auth";

import PageContent from "../components/UI/PageContent";
import Input from "../components/UI/Input";
import useSimpleInput from "../hooks/useSimpleInput";
import { useState } from "react";

function Withdrawal() {
  const navigate = useNavigate();
  const { userInfo } = useAuthValue();
  const { withdrawalHandler } = useAuthActions();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { value: password, inputChangeHandler: passwordChangeHandler } =
    useSimpleInput("");

  const withdrawalSubmissionHandler = () => {
    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      const reqBody = {
        email: userInfo.email,
        password: password,
      };
      const tryCatch = {
        try() {
          navigate("/");
        },
        catch() {
          window.alert("현재 비밀번호가 일치하지 않습니다.");
        },
      };
      setIsSubmitting(true);
      withdrawalHandler(reqBody, tryCatch);
      setIsSubmitting(false);
    }
  };

  return (
    <PageContent>
      <h1>회원 탈퇴</h1>
      <div>
        <form>
          <Input
            id="nickname-withdraw"
            name="nickname"
            label="닉네임"
            type="text"
            value={userInfo.nickname}
            disabled
          />
          <Input
            id="email-withdraw"
            name="email"
            label="이메일"
            ㅎ
            type="email"
            value={userInfo.email}
            disabled
          />
          <Input
            id="password-withdraw"
            name="password"
            label="비밀번호"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </form>
      </div>
      <p>회원 탈퇴 시, 기존 회원 정보를 복구할 수 없습니다.</p>
      <div>
        <button onClick={() => navigate(-1)}>돌아가기</button>
        <button onClick={withdrawalSubmissionHandler} disabled={isSubmitting}>
          탈퇴하기
        </button>
      </div>
    </PageContent>
  );
}

export default Withdrawal;
