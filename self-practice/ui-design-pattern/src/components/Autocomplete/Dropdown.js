import styled from "styled-components";

const DropdownContainer = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  padding: 0 0.5rem 0.5rem 0.5rem;

  background-color: white;
  border: 1px solid black;
  border-top: ${(props) => props.isOpen && "0"};
  border-radius: 0 0 1rem 1rem;
  cursor: default;

  > li {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;

    &.selected {
      background-color: #eee;
    }

    > span {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
  }
`;

function Dropdown({ isOpen, options, onSelect, selected, onMouseOver }) {
  if (!isOpen) return null;

  return (
    <DropdownContainer isOpen={isOpen}>
      {options.map((option, idx) => (
        <li
          key={idx}
          onClick={() => onSelect(option)}
          onMouseEnter={() => onMouseOver(idx)}
          className={selected === idx ? "selected" : ""}
        >
          <span>{option}</span>
        </li>
      ))}
    </DropdownContainer>
  );
}

export default Dropdown;
