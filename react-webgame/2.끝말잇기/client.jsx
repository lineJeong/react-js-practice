const React = require("react");
// const ReactDom = require("react-dom");
const ReactDom = require("react-dom/client");

// const WordRelay = require("./WordRelay");
const WordRelay = require("./WordRelay-hooks");

// ReactDom.render(<WordRelay />, document.querySelector("#root"));
ReactDom.createRoot(document.querySelector("#root")).render(<WordRelay />);
