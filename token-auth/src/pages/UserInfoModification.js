import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../store/use-auth";
import useInput from "../hooks/useInput";
import useSimpleInput from "../hooks/useSimpleInput";
import useUniqueNickname from "../hooks/useUniqueNickname";
import * as authValidation from "../util/authValidation";

import classes from "./UserInfoModification.module.css";
import Input from "../components/UI/Input";
import PageContent from "../components/UI/PageContent";

function UserInfoModification() {
  const { userInfo } = useAuthValue();
  const navigate = useNavigate();

  const {
    value: nicknameValue,
    isValid: nicknameIsValid,
    hasError: nicknameHasError,
    inputChangeHandler: nicknameChangeHandler,
    inputBlurHandler: nicknameBlurHandler,
  } = useInput(authValidation.isValidNickname, userInfo.nickname);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(authValidation.isValidPassword);
  const {
    value: repasswordValue,
    isValid: repasswordIsValid,
    hasError: repasswordHasError,
    inputChangeHandler: repasswordChangeHandler,
    inputBlurHandler: repasswordBlurHandler,
  } = useInput(authValidation.isValidRepassword.bind(null, passwordValue));
  const {
    nicknameIsUnique,
    nicknameCheckMsg,
    hasNicknameCheckMsg,
    nicknameCheckHandler,
  } = useUniqueNickname(nicknameValue, nicknameIsValid);
  const {
    value: currentPasswordValue,
    inputChangeHandler: currentPasswordChangeHandler,
  } = useSimpleInput("");

  let nicknameFormIsValid = false;
  if (nicknameIsValid && nicknameIsUnique) {
    nicknameFormIsValid = true;
  }
  let passwordFormIsValid = false;
  if (
    currentPasswordValue.trim().length > 0 &&
    passwordIsValid &&
    repasswordIsValid
  ) {
    passwordFormIsValid(true);
  }

  // 닉네임, 비빌번호 변경 submit 핸들러 함수!
  // submitting 상태 관리

  return (
    <PageContent>
      <h1>회원정보 수정</h1>
      <div>
        <div className={classes["nickname-container"]}>
          <h3>닉네임 변경</h3>
          <Input
            id="nickname-modifyr"
            label="변경할 닉네임"
            type="text"
            value={nicknameValue}
            onChange={nicknameChangeHandler}
            onBlur={nicknameBlurHandler}
            hasError={nicknameHasError}
            errorMsg="닉네임은 2글자 이상, 10글자 이하로 설정해주세요."
            button="중복 확인"
            onClick={nicknameCheckHandler}
            hasCheckMsg={hasNicknameCheckMsg}
            checkMsg={nicknameCheckMsg}
          />
          <button
            className={classes["modify-button"]}
            disabled={!nicknameFormIsValid}
          >
            닉네임 변경
          </button>
        </div>
        <div className={classes["password-container"]}>
          <h3>비밀번호 변경</h3>
          <Input
            id="password-current"
            name="password"
            label="현재 비밀번호"
            type="password"
            value={currentPasswordValue}
            onChange={currentPasswordChangeHandler}
          />
          <Input
            id="password-modify"
            label="새 비밀번호"
            type="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            hasError={passwordHasError}
            errorMsg="비밀번호는 6글자 이상으로 설정해주세요."
          />
          <Input
            id="repassword-modify"
            label="비밀번호 재확인"
            type="password"
            value={repasswordValue}
            onChange={repasswordChangeHandler}
            onBlur={repasswordBlurHandler}
            hasError={repasswordHasError}
            errorMsg="비밀번호가 일치하지 않습니다."
          />
          <button
            className={classes["modify-button"]}
            disabled={!passwordFormIsValid}
          >
            비밀번호 변경
          </button>
        </div>
        <div className={classes["button-container"]}>
          <button type="button" onClick={() => navigate(-1)}>
            돌아가기
          </button>
        </div>
      </div>
    </PageContent>
  );
}

export default UserInfoModification;
