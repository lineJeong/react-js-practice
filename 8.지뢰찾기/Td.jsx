import React, { useContext } from "react";
import { CODE, tableContext } from "./MineSearch";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.OPENED:
      return {
        background: "white",
      };
    default:
      return {
        background: "white",
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    default:
      return "";
  }
};

function Td({ rowIndex, cellIndex }) {
  const { tableData } = useContext(tableContext);
  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
}

export default Td;
