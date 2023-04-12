import { useState } from "react";
import Tag from "./Tag";

function TagSample() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addTagHandler = (e) => {
    const { value } = e.target;

    if (e.key === "Enter") {
      if (value.trim().length === 0) {
        return window.alert("1글자 이상 입력 해주세요.");
      }
      if (tags.includes(value)) {
        return window.alert("이미 추가된 태그입니다.");
      }

      setTags((prev) => [...prev, value]);
      setInputValue("");
    }
  };

  const removeTagHandler = (idxToRemove) => {
    setTags((prev) => prev.filter((_, idx) => idxToRemove !== idx));
  };

  return (
    <Tag
      tags={tags}
      inputValue={inputValue}
      onChange={changeInputHandler}
      addTag={addTagHandler}
      removeTag={removeTagHandler}
    />
  );
}

export default TagSample;
