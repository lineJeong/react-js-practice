import { memo } from "react";
import { ACTION_TYPES } from "../pages/AttendanceBook";

function Student({ id, name, isHere, dispatch }) {
  const deleteStudent = (id) => {
    dispatch({ type: ACTION_TYPES.deleteStudent, payload: { id } });
  };

  const getNameStyle = () => {
    if (isHere) {
      return {
        textDecoration: "line-through",
        color: "grey",
      };
    } else {
      return {
        textDecoration: "none",
        color: "black",
      };
    }
  };

  const markStudent = (id) => {
    dispatch({ type: ACTION_TYPES.markStudent, payload: { id } });
  };

  return (
    <div>
      <span style={getNameStyle()} onClick={() => markStudent(id)}>
        {name}
      </span>
      <button onClick={() => deleteStudent(id)}>삭제</button>
    </div>
  );
}

export default memo(Student);
