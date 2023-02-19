import { useInput } from "./useInput";

const displayMessage = (message) => {
  alert(message);
};

function CustomHooks() {
  const [inputValue, handleChange, handleSubmit] = useInput(
    "안녕",
    displayMessage
  );

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default CustomHooks;
