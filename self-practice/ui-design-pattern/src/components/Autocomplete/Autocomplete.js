import styled from "styled-components";
import Dropdown from "./Dropdown";

const InputContainer = styled.div`
  display: flex;
  background-color: transparent;
  border: 1px solid black;
  border-bottom: ${(props) => props.isOpen && "0"};
  border-radius: ${(props) =>
    props.isOpen ? "1rem 1rem 0 0" : "1rem 1rem 1rem 1rem"};
  padding: 0.7rem;

  > input {
    flex: 1;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
  }

  > .cancel-button {
    cursor: pointer;
  }
`;

function Autocomplete({
  inputValue,
  onChange,
  isOpen,
  options,
  onSelect,
  onClose,
  onKeyUp,
  selected,
  onMouseOver,
}) {
  return (
    <div onKeyUp={onKeyUp}>
      <InputContainer isOpen={isOpen}>
        <input value={inputValue} onChange={onChange} />
        <div className="cancel-button" onClick={onClose}>
          &times;
        </div>
      </InputContainer>
      <Dropdown
        isOpen={isOpen}
        options={options}
        onSelect={onSelect}
        selected={selected}
        onMouseOver={onMouseOver}
      />
    </div>
  );
}

export default Autocomplete;
