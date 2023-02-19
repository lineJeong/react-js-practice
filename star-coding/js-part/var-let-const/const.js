// let과 달리 const는 재할당 불가
const a = "hi";
// a = "hello"; // Uncaught TypeError: Assignment to constant variable.

// const b; // 선언문에서 할당하지 않는 것도 불가함

// 참조 자료형(객체, 배열 등 Object로 구분되는 모든 자료형)의 경우, 여전히 재할당은 불가하지만 내부 속성을 변경하는 것은 가능함
const c = {
  x: 1,
  y: 2,
};

c.z = 3;
c.x = 4;

console.log(c);

// 객체 불변성을 유지하고 싶다면 Object.freeze 사용
// 참조 자료형의 속성이 참조 자료형인 내부 속성을 변경할 경우엔 Object.freeze만으로 객체 불변성을 유지할 수 없음
const d = Object.freeze({
  x: [0, 1],
  y: 2,
});

d.z = 3;
d.x = 4;

console.log(d);
