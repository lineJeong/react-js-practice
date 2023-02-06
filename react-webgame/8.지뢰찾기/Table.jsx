import React, { useContext, memo } from "react";
import { tableContext } from "./MineSearch";
import Tr from "./Tr";

function Table() {
  const { tableData } = useContext(tableContext);
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowIndex={i} />
        ))}
    </table>
  );
}

export default memo(Table);
