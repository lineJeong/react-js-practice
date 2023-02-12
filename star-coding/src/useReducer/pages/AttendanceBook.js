import { useReducer, useState } from "react";
import Student from "../components/Student";

const initialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: "James",
      isHere: false,
    },
  ],
};

export const ACTION_TYPES = {
  addStudent: "addStudent",
  deleteStudent: "deleteStudent",
  markStudent: "markStudent",
};

const reducer = (state, action) => {
  const { name, id } = action.payload;
  const { count, students } = state;

  switch (action.type) {
    case ACTION_TYPES.addStudent:
      const newStudnt = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: count + 1,
        students: [...students, newStudnt],
      };
    case ACTION_TYPES.deleteStudent:
      return {
        count: count - 1,
        students: students.filter((student) => student.id !== id),
      };
    case ACTION_TYPES.markStudent:
      return {
        ...state,
        students: students.map((student) =>
          student.id === id ? { ...student, isHere: !student.isHere } : student
        ),
      };
    default:
      return state;
  }
};

function AttendanceBook() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  const { count, students } = studentsInfo;

  const onChange = (e) => {
    setName(e.target.value);
  };

  const addStudent = () => {
    dispatch({ type: ACTION_TYPES.addStudent, payload: { name } });
    setName("");
  };

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={onChange}
      />
      <button onClick={addStudent}>추가</button>
      {students.map(({ id, name, isHere }) => (
        <Student
          key={id}
          id={id}
          name={name}
          isHere={isHere}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default AttendanceBook;
