// 1. 함수 선언식
// 호이스팅 O => 선언 전에 함수 호출 가능
// 함수 이름을 필수적으로 넣어 줘야 함 (익명 함수 불가)
function main1() {
  console.log("hello");
}

// 2. 함수 표현식
// 호이스팅 X => 선언 전에 함수 호출 불가 (에러 발생)
// 함수 이름 생략 가능 (익명 함수)
// 함수를 하나의 표현식 안에서 정의
const main2 = function () {
  console.log("hello");
};

// 3. 화살표 함수
// 호이스팅 X => 선언 전에 함수 호출 불가 (에러 발생)
// 항상 익명 함수
const main3 = () => {
  console.log("hello");
};

// 3-1. 함수 내 코드가 한줄이면 return 생략 가능
const test1 = (a, b) => a + b;

// 3-2. 매개변수가 하나라면 소괄호도 생략 가능 (한데 prettier 설정 때문에 소괄호로 자동저장됨..)
const print = (text) => console.log(text);

// 3-3. 매개변수가 없더라도 소괄호는 생략하면 안됨 (어차피 에러남)
const test2 = () => console.log("test");

// 3-4. return 생략할 때, 리턴되는 값이 객체면 소괄호로 감싸기
const getObject = () => ({ name: "별코딩" });

// 4. arguments & 가변인자
// 4-1. 함수 선언식
function args1() {
  console.log(arguments); // 함수가 전달받은 인자를 담고 있는 배열 형태의 객체
  console.log(arguments[0]); // 1
}
// arguments는 배열 형태의 객체로, length 및 인덱스 속성은 갖고 있지만,
// 배열 내장 메서드인 forEach, filter, map 등은 가지고 있지 않음!

args1(1, 2, 3);

// 4-2. 화살표 함수
// 매개변수 자리를 비우고 매개변수 자리를 비우고, arguments를 사용하면 에러 발생
const args2 = () => {
  console.log(arguments); // arguments is not defined
};
// args2();

// 화살표 함수에서 가변인자를 처리하고 싶다면, 나머지 매개변수 구문을 사용해야 함
const args3 = (...args) => {
  console.log(args); // [1, 2, 3]
  console.log(args[0]); // 1
};
args3(1, 2, 3);
