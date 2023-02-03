import React, { useContext, memo } from "react";
import { tableContext } from "./MineSearch";
import Td from "./Td";

function Tr({ rowIndex }) {
  const { tableData } = useContext(tableContext);
  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
}

export default memo(Tr);
