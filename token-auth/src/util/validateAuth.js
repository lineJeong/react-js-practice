export const validateEmail = (email) => email.includes("@");

export const validateNickname = (nickname) =>
  nickname.trim().length >= 2 && nickname.trim().length <= 10;

export const validatePassword = (password) => password.trim().length >= 6;

export const validateRepassword = (repassword, password) =>
  repassword === password;

export const validateAuthNumber = (certification) =>
  certification.trim().length > 0;
