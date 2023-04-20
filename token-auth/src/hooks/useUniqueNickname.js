import { useEffect, useState } from "react";
import * as authApi from "../api/auth";

function useUniqueNickname(nicknameValue, nicknameIsValid) {
  const [nicknameIsUnique, setNicknameIsUnique] = useState(null);
  const [nicknameCheckMsg, setNicknameCheckMsg] = useState(null);
  const hasNicknameCheckMsg = nicknameIsUnique !== null;

  useEffect(() => {
    setNicknameIsUnique(null);
  }, [nicknameValue]);

  useEffect(() => {
    if (nicknameIsUnique === true) {
      setNicknameCheckMsg("사용 가능한 닉네임 입니다.");
    } else if (nicknameIsUnique === false) {
      setNicknameCheckMsg("이미 존재하는 닉네임 입니다.");
    } else {
      setNicknameCheckMsg(null);
    }
  }, [nicknameIsUnique]);

  const nicknameCheckHandler = async () => {
    if (!nicknameIsValid) return;

    try {
      await authApi.nicknameCheck(nicknameValue);
      setNicknameIsUnique(false);
    } catch (error) {
      setNicknameIsUnique(true);
      console.error(error);
    }
  };

  return {
    nicknameIsUnique,
    nicknameCheckMsg,
    hasNicknameCheckMsg,
    nicknameCheckHandler,
  };
}

export default useUniqueNickname;
