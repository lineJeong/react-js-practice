// this는 함수를 호출한 객체이다

// 1. 전역 문맥에서 this
console.log(this); // window 전역 객체 console에 출력

if (true) {
  console.log(this); // window 전역 객체 console에 출력
}
// 전역적인 문맥에서 this에 접근하면 this는 window 객체가 됨

// 1-1. 엄격모드
// "use strict";
console.log(this); // window 전역 객체 console에 출력

// 2. 함수 문맥에서 this
function main() {
  // "use strict";
  console.log("main: ", this); // window 객체 출력
}
console.log(window);
// main 함수가 window 객체 속성으로 들어감을 확인할 수 있음

main();
window.main();
// main() === window.main()

// 2번의 경우 "use strict"로 엄격모드 설정 시,
// main()으로 호출했을 때, this 값은 undefined
// window.main()으로 명시적으로 호출해야 함

// 3. 객체 메서드에서 this
const object = {
  name: "object",
  main: function () {
    console.log(this);
  },
};

object.main(); // object 객체 출력
// this는 함수(main)를 호출한 객체(object)이다.
// 따라서 여기서 this는 obejct를 가리킴

const main2 = object.main;
main2(); // window 객체 출력
// main2 함수를 호출한 객체는 object가 아니라 window (전역적으로 호출된 함수이기 때문)

// 3-1. this는 함수가 정의된 위치나 방법에 영향을 받지 않음
// 함수가 객체 외부에서 정의됐을 때
function main3() {
  console.log("main3: ", this);
}

const object2 = {
  name: "object2",
  main3,
  smallObject: {
    name: "smallObject",
  },
};
object2.smallObject.main3 = main3;

object2.main3(); // object2 객체 출력
object2.smallObject.main3(); // smallObejct 객체 출력
// 함수가 객체 외부에서 정의됐든, 내부에서 정의됐든 this는 "함수를 호출하는 객체"라는 것

// 4. bind - this값이 동적으로 바뀌지 않게, 원하는 객체에 고정
function main4() {
  console.log("main4: ", this);
}

const mainBind = main4.bind({ name: "hi, bind" });
mainBind(); // { name: "hi, bind" } 출력 (window 객체 출력 X)

const object3 = {
  mainBind,
};
object3.mainBind(); // { name: "hi, bind" } 출력 (object3 객체 출력 X)

// 주의) 이미 bind된 걸 또 바인드 할 수는 없음! 또다시 바인드 했을 땐 무시하고 이전 바인드한 객체를 출력함
const mainBindBind = mainBind.bind({});
mainBindBind(); // { name: "hi, bind" } 출력 ({} 출력 X)

const object4 = {
  name: "object4",
  main: function () {
    console.log("main Func bind", this);
  }.bind({ name: "bind" }),
};

object4.main(); // { name: "bind" } 출력 (object4 객체 출력 X)

// 5. 이벤트 처리기
const button = document.querySelector("#btn");

button.addEventListener("click", function (event) {
  console.log(event.target === this); // true
});
