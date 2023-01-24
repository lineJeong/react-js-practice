import React, { useState, useReducer, useCallback } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "0",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
      };
    }
    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === "0" ? "X" : "O",
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [winner, setWinner] = useState("");
  //   const [turn, setTurn] = useState("0");
  //   const [tableData, setTableData] = useState([
  //     ["", "", ""],
  //     ["", "", ""],
  //     ["", "", ""],
  //   ]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "useReducer" });
  }, []);

  return (
    <>
      <Table
        onClick={onClickTable}
        tableData={state.tableData}
        dispatch={dispatch}
      />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
