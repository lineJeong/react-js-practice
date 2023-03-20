export const isValidEmail = (email) => email.includes("@");

export const isValidNickname = (nickname) =>
  nickname.trim().length >= 2 && nickname.trim().length <= 10;

export const isValidPassword = (password) => password.trim().length >= 6;

export const isValidRepassword = (repassword, password) =>
  repassword === password;

export const isNotEmpty = (value) => value.trim().length > 0;

export const HaveLoginInputsError = (value, setErrorMsg) => {
  const emailIsEmpty = !isNotEmpty(value.email);
  const passwordIsEmpty = !isNotEmpty(value.password);
  if (emailIsEmpty && passwordIsEmpty) {
    setErrorMsg("이메일과 비밀번호를 입력해주세요.");
    return true;
  }
  if (emailIsEmpty) {
    setErrorMsg("이메일을 입력해주세요.");
    return true;
  }
  if (passwordIsEmpty) {
    setErrorMsg("비밀번호를 입력해주세요.");
    return true;
  }
};
