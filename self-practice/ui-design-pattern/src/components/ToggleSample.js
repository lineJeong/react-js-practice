import { useState } from "react";
import Toggle from "./Toggle";

function ToggleSample() {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
  };

  return <Toggle isOn={isOn} onToggle={toggleHandler} />;
}

export default ToggleSample;
