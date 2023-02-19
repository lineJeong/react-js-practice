// 호이스팅 : 프로그램이 실행되기 이전에 변수 선언과 변수의 초기화를 분리해서 변수의 선언 부분만 프로그램의 제일 위로 끌어올려주는 것

// var 키워드로 선언된 변수는 호이스팅 될 때 자동으로 undefined로 초기화됨 => 그래서 선언문 이전에 접근할 수 있게 되는 것

console.log(num1); // undefined 출력
var num1 = 1;
console.log(num1); // 1 출력

// 위 코드 실행 시, 아래와 같이 진행
// var num1;
// console.log(num1) // undefined 출력
// num1 = 1;
// console.log(num1) // 1 출력

// let 키워드로 선언된 변수도 호이스팅 되지만 코드상에 있는 선언문에 닿기 전까지 "TDZ(일시적 사각지대)"에 안에 있게 됨 => 자바스크립스틑 TDZ에 있는 변수에 대한 접근을 허용하지 않음
// => 그래서 선언문 이전에 접근을 시도했을 때 에러 발생

console.log(num2); // Uncaught ReferenceError: Cannot access 'num2' before initialization (에러 발생)
let num2 = 2;
