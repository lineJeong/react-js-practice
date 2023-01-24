import React, { useCallback } from "react";
import { CLICK_CELL } from "./TicTacToe";

const Td = ({ rowIndex, cellIndex, cellData, dispatch }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex, cellData);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
