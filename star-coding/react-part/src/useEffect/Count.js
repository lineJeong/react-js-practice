import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("랜더링");
  });

  useEffect(() => {
    console.log("마운트 될 때만 랜더링");
  }, []);

  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default Count;
