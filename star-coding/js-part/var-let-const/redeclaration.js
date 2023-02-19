// // #### var는 재선언이 됨 (기존에 선언했던 변수에 할당된 값을 덮어씌움 => 의도치 않은 에러를 발생시켜 혼란을 야기할 수 있음)
// var x = "안녕하세요";

// //...(수백 ~ 수천줄의 코드)

// var x = "hi";

// console.log(x);

// // #### let은 재선언 불가 (재선언 시, 에러 발생)
// let y = "안녕하세요";

// //...(수백 ~ 수천줄의 코드)

// var y = "hi"; // Uncaught SyntaxError: Identifier 'y' has already been declared

// console.log(y);
