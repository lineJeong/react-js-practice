const React = require("react");
const ReactDom = require("react-dom/client");

// const ResponseCheck = require("./ResponseCheck");
import ResponseCheck from "./ResponseCheck-Hooks";

ReactDom.createRoot(document.querySelector("#root")).render(<ResponseCheck />);
