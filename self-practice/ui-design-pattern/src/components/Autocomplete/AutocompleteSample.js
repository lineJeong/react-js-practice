import { useState } from "react";
import Autocomplete from "./Autocomplete";

const dummyOptions = [
  "테스트",
  "테라스",
  "autocomplete",
  "modal",
  "tab",
  "toggle",
  "tag",
];

function AutocompleteSample() {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(dummyOptions);
  const [selected, setSelected] = useState(-1);
  const [dropdownIsOpen, setDropDownIsOpen] = useState(false);

  const hasText = inputValue.trim().length > 0;

  // input onChange 이벤트 핸들러 연결 함수
  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setSelected(-1);

    // input에 입력값이 있을 때
    if (value.trim().length > 0) {
      const dropDownList = dummyOptions.filter((el) => el.includes(value));
      setOptions(dropDownList);

      // 일치하는 options가 있을 떄, 없을 때 분기
      if (dropDownList.length === 0) {
        setDropDownIsOpen(false);
      } else {
        setDropDownIsOpen(true);
      }
    } else {
      // input에 입력값이 없을 때
      setDropDownIsOpen(false);
    }
  };

  // onClick 이벤트 핸들러 연결 함수 - 드롭다운 옵션(<li>)
  const optionSelectHandler = (clickedOption) => {
    setInputValue(clickedOption);
    setDropDownIsOpen(false);
  };

  const calcelBtnClickHandler = () => {
    setInputValue("");
    setDropDownIsOpen(false);
  };

  // onMouseEnter 이벤트 핸들러 연결 함수 - 드롭다운 옵션(<li>)
  const onMouseEnterHandler = (idx) => {
    setSelected(idx);
  };

  // onKeyup 이벤트 핸들러 함수 - 키보드로 드롭다운 옵션 선택 (위아래 방향키, 엔터)
  const onKeyUpHandler = (e) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#example
    // eslint-disable-next-line
    if (
      e.getModifierState("Fn") ||
      e.getModifierState("Hyper") ||
      e.getModifierState("OS") ||
      e.getModifierState("Super") ||
      e.getModifierState("Win")
    )
      return;
    if (
      e.getModifierState("Control") +
        e.getModifierState("Alt") +
        e.getModifierState("Meta") >
      1
    )
      return;

    if (hasText) {
      if (e.code === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (e.code === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (e.code === "Enter" && selected >= 0) {
        optionSelectHandler(options[selected]);
        setSelected(-1);
      }
    }
  };

  return (
    <Autocomplete
      inputValue={inputValue}
      onChange={inputChangeHandler}
      options={options}
      onSelect={optionSelectHandler}
      isOpen={dropdownIsOpen}
      onClose={calcelBtnClickHandler}
      onKeyUp={onKeyUpHandler}
      selected={selected}
      onMouseOver={onMouseEnterHandler}
    />
  );
}

export default AutocompleteSample;
