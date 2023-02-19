// // 전역 스코프
var aVar = "varHello"; // window 객체(단 하나 뿐인 전역 객체)의 속성으로 등록됨
let aLet = "letHello";
console.log(window);

// 함수 스코프 4
function funcScope4() {
  for (var i = 0; i < 2; i++) {
    console.log(i);
  }
  console.log(i); // 2 출력 (변수 i는 var로 선언됐기 때문에 함수 스코프 적용 => 에러 발생X)
}
// funcScope4();

// 블록 스코프 3
function blcokScope4() {
  for (let i = 0; i < 2; i++) {
    console.log(i);
  }
  console.log(i); // let 키워드로 선언한 변수 i의 블록 스코프 밖에 있으므로 에러 발생
}
// blcokScope4();

// 함수 스코프 3
// var 키워드는 같은 스코프 내에서 변수의 중복 선언을 허용 => 같은 스코프 내에서 var 키워드를 중복으로 사용해 동일한 변수명을 재사용할 시, 이전에 선언한 변수를 덮어씀
function funcScope3() {
  var e = "hello funcScope3";
  if (true) {
    var e = "hi funcScope3";
  }
  console.log(e); // hi funcScope3
}
// funcScope3();

// 블록 스코프 2
function blockScope2() {
  let d = "hello blockScope2";
  if (true) {
    let d = "hi blockScope2";
    console.log(d); // "hi blockScope2"
  }
  console.log(d); // "hello blockScope2"
}
// blockScope2();

// 블록 스코프 1
function blockScope1() {
  if (true) {
    let c = "hi blockScope1";
    console.log(c); // 정상 출력 (블록 스코프 내에서 변수에 접근)
  }
  console.log(c); // Uncaught ReferenceError: c is not defined
  // 블록 스코프 바깥에서 변수에 접근했기 때문에 var의 경우와 달리 에러 발생
}
// blockScope1();

// 함수 스코프 2 (블록 스코프인 let, const인 경우, 블록 스코프 (중괄호로 묶인 if, switch, while, for 등) 외부에서 변수에 접근하고 있기 때문에 에러 발생)
function funcScope2() {
  if (true) {
    var b = "hi funcScope2";
  }
  console.log(b); // 정상 출력
}
// funcScope2();

// 함수 스코프 1
function funcScope() {
  var a = "hi funcScope";
  console.log(a); // 정상 출력
}
// funcScope();
// console.log(a); // Uncaught ReferenceError: a is not defined
