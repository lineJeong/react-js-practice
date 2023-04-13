import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    transition: all 0.2s ease;
    background-color: white;
    border: 1px solid black;

    &.checked {
      background-color: black;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: black;
    transition: all 0.25s ease;

    &.checked {
      left: 28px;
      background-color: white;
    }
  }
`;

const Desc = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

function Toggle({ isOn, onToggle }) {
  return (
    <>
      <ToggleContainer onClick={onToggle}>
        <div className={`toggle-container ${isOn ? "checked" : ""}`} />
        <div className={`toggle-circle ${isOn ? "checked" : ""}`} />
      </ToggleContainer>
      {isOn ? <Desc>Toggle ON</Desc> : <Desc>Toggle OFF</Desc>}
    </>
  );
}

export default Toggle;
