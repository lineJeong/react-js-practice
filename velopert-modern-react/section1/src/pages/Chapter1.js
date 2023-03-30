import React, { useRef, useState, useMemo, useCallback } from "react";
import Counter from "../components/Counter";
import CreateUser from "../components/CreateUser";
import Hello from "../components/Hello";
import InputSample from "../components/InputSample";
import UserList from "../components/UserList";
import Wrapper from "../components/Wrapper";

const countActiveUsers = (users) => {
  //   console.log("활성 사용자 수를 세는 중");
  return users.filter((user) => user.active).length;
};

function Chapter1() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }, []);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  // useCallback : 컴포넌트가 리렌더링 될 때 마다 함수가 새로 만들어지는 일을 방지하고, 필요할때만 새로 만들고 재사용하도록 최적화
  // onCreate, onRemove, onToggle 함수에 useCallback 적용
  // 함수 안에서 사용하는 상태 혹은 props(함수 포함) 가 있다면 꼭, deps 배열안에 포함시켜야 함 (for 최신 값 참조)

  // useCallback 은 useMemo 를 기반으로 만들어졌고 아래와 같이 사용할 수도 있음
  //   const onToggle = useMemo(
  //   () => () => {
  //     /* ... */
  //   },
  //   [users]
  // );

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    // setUsers(users.concat(user));

    // 함수형 업데이트를 사용해 users를 deps에서 제거함으로써 users 배열이 바뀔 때마다 함수가 새로 만들어져 발생되던 리랜더링 현상을 막아 최적화 함
    setUsers((prevUsers) => [...prevUsers, user]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((prevUser) => prevUser.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((prevUser) =>
      prevUser.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <h1>Chaper1</h1>

      <Wrapper>
        <h2>1.1~1.6</h2>
        <Hello />
        <Hello name="name props 전달 O" isSpecial />
        <div className="gray-box"></div>
      </Wrapper>

      <Wrapper>
        <h2>1.7</h2>
        <Counter />
      </Wrapper>

      <Wrapper>
        <h2>1.8~1.10</h2>
        <InputSample />
      </Wrapper>

      <Wrapper>
        <h2>1.11~</h2>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <div>활성 사용자 수 : {count}</div>
      </Wrapper>
    </>
  );
}

export default Chapter1;
