const React = require("react");
const ReactDom = require("react-dom/client");

import Lotto from "./Lotto-Hooks";

ReactDom.createRoot(document.querySelector("#root")).render(<Lotto />);
