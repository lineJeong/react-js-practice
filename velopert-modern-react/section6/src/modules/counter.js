// Ducks 패턴 - 리듀서와 액션 관련 코드들을 하나의 파일에 몰아서 작성
// https://github.com/erikras/ducks-modular-redux

// 접두사 사용 - 다른 모듈의 액션들과 액션 이름이 중복되는 것을 방지
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
  diff: 1,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
};

export default counterReducer;
