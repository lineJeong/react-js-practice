import styled from "styled-components";

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  min-height: 40px;
  padding: 1rem;
  border: 1px solid black;

  > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 1rem 0;
    padding-left: 0;

    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      color: white;
      padding: 10px;
      margin: 3px 0;
      border-radius: 1rem;

      &:not(:last-child) {
        margin-right: 0.5rem;
      }
      > .tag-remove-btn {
        width: 15px;
        height: 15px;
        line-height: 15px;
        background-color: white;
        color: black;
        text-align: center;
        border-radius: 50%;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

const TagInput = styled.input.attrs((props) => ({
  type: "text",
  minLength: "1",
  maxLength: "10",
  placeholder: "추가할 태그를 입력하고 엔터를 눌러주세요.",
}))`
  padding: 5px;
`;

function Tag({ tags, inputValue, onChange, addTag, removeTag }) {
  return (
    <TagContainer>
      <ul>
        {tags.map((tag, idx) => (
          <li key={tag}>
            <span>{tag}</span>
            <span className="tag-remove-btn" onClick={() => removeTag(idx)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
      <TagInput value={inputValue} onChange={onChange} onKeyPress={addTag} />
    </TagContainer>
  );
}

export default Tag;
