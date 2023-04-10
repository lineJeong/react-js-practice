import { createStore } from "redux";

// 리덕스에서 관리할 관리 상태
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션 생성함수
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const changeText = (text) => ({ type: CHANGE_TEXT, text });
const addToList = (item) => ({ type: ADD_TO_LIST, item });

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

// 액션들 디스패치하기
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("텍스트 변경하기"));
unsubscribe(); // 구독 해제
store.dispatch(addToList({ id: 1, text: "텍스트" }));
