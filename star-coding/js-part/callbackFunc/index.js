// 콜백함수 - 다른 함수의 인자로 전달되는 함수
function main(x) {
  console.log("준비 작업..");
  x(x);
  console.log("정리 작업..");
}

function sayHi() {
  console.log("안녕");
}

// sayHi() 상태로 전달하지 않도록 주의! (return 값을 전달하게 됨)
main(sayHi); // "안녕" 호출
main(function () {
  console.log("안녕");
});
main(() => {
  console.log("안녕");
});

// 콜백함수 응용
function greetToUser(greet) {
  const name = "별코딩";
  greet(name);
}

function greetInKorean(name) {
  console.log(name + "님, 안녕하세요.");
}

function greetInEnglish(name) {
  console.log("Hi, " + name);
}

greetToUser(greetInKorean);
greetToUser(greetInEnglish);

// 비동기적으로 실행되는 함수를 처리하기 편리함
// 콜백함수를 호출하기 전에 시간이 오래 걸리는 작업을 먼저 호출한 뒤,
// 해당 함수가 끝마치기를 기다린 후 콜백함수를 호출할 수 있음

// setTimeout - setTimeout의 인자로 들어가는 콜백 함수
// 콜백 함수의 호출은 setTimeout의 내부 구현 사항에 달려있음
setTimeout(function () {
  console.log("hi");
}, 1000);
