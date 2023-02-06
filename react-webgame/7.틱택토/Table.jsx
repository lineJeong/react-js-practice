import React from "react";
import Tr from "./Tr";

const Table = ({ tableData, dispatch }) => {
  //   Array(tableData.length)
  //     .fill()
  //     .map((v, i) => {
  //       console.log("rowIndex", i);
  //       console.log("rowData", tableData[i]);
  //     });

  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />
        ))}
    </table>
  );
};

export default Table;
