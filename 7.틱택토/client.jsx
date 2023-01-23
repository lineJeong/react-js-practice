const React = require("react");
const ReactDom = require("react-dom/client");

import TicTacToe from "./TicTacToe";

ReactDom.createRoot(document.querySelector("#root")).render(<TicTacToe />);
