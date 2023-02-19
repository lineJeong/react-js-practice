import React from "react";
import Column from "./Column";
import "./style.css";

// table 처럼 정해진 구조를 따라야 할 때
function Tip2() {
  return (
    <div className="Tip2">
      <table>
        <tbody>
          <tr>
            <Column />
          </tr>
          <tr>
            <Column />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tip2;
