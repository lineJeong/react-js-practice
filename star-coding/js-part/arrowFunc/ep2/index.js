// 1. 일반 함수의 this
// 함수를 어떤 객체가 호출하느냐에 따라 this값이 동적으로 바뀜
function main() {
  console.log(this);
}

const object = {
  name: "object",
  main,
};

const object2 = {
  name: "object2",
  main,
};

object.main(); // object 객체 출력
object2.main(); // object2 객체 출력

// 일반 함수의 this는 함수가 선언된 위치와는 관계 없으며,
// 함수가 호출되는 방법에 따라 this 값이 결정됨

// 일반 함수는 자기자신만의 this를 갖고 있기 때문에 함수가 호출되는 시점인 런타임에 this를 자신을 호출한 객체에 묶음
// => 다이나믹 바인딩, 런타임 바인딩 이라고 부름

const object3 = {
  name: "object3",
  main: function () {
    console.log(this.name + "입니다");
  },
};

const object4 = {
  name: "object4",
  main: object3.main,
};

object3.main(); // "object3입니다" 출력
object4.main(); // "object4입니다" 출력

// 2. 화살표 함수의 this
// 화살표 함수는 자신만의 this를 가지고 있지 않기 때문에 화살표 함수 내부에서 this에 접근하면 상위로부터 this를 가져와서 사용함

// 화살표 함수의 this 값은 함수가 선언된 위치에서 결정됨
// 화살표 함수를 감싸는 상위 스코프의 this를 가져다 써야되기 때문
// 화살표 함수를 어떻게 호출하느냐는 영향을 끼치지 않음

const object5 = {
  name: "object5",
  main: function () {
    console.log(this);
  },
  mainArrow: () => {
    console.log(this);
  },
};

const object6 = {
  name: "object6",
  mainArrow: object5.mainArrow,
};

object5.main(); // object5 객체 출력
object5.mainArrow(); // window 객체 출력
object6.mainArrow(); // window 객체 출력

// 메서드 내부에서 this를 통해 객체의 속성에 접근해야 되는 경우가 있기 때문에,
// 객체의 메서드로는 화살표 함수보다는 일반 함수를 사용하는 것이 더 적합할 수 있음

// 예제 1) 내장 함수
// 1-1. 일반 함수
const ex1 = {
  name: "ex1",
  main() {
    const innerFunc = function () {
      console.log(this);
    };
    innerFunc();
  },
};

ex1.main(); // window 객체 출력
// innerFunc 호출 시, 어떤 객체로부터 직접적으로 호출된 것이 아니기 때문

// 1-2. 화살표 함수
const ex2 = {
  name: "ex2",
  main() {
    const innerFunc = () => {
      console.log(this);
    };
    innerFunc();
  },
};

ex2.main(); // ex2 객체 출력
// 화살표 함수의 상위 스코프인 main 함수의 this는 ex2 객체이기 때문

// 1-3. 일반 함수 bind
const ex3 = {
  name: "ex3",
  main() {
    const innerFunc = function () {
      console.log(this);
    }.bind({ hi: "hi" });
    innerFunc();
  },
};

ex3.main(); // {hi: 'hi'} 출력

// 1-4. 화살표 함수는 bind 사용 불가
// 화살표 함수는 bind를 해줄 자신만의 this를 가지고 있지 않기 때문에 this를 원하는 객체로 바꿔줄 수 없음

const ex4 = {
  name: "ex4",
  main() {
    const innerFunc = (() => {
      console.log(this);
    }).bind({ hi: "hi" });
    innerFunc();
  },
};

ex4.main(); // {name: 'ex4', main: ƒ} 출력 (bind 적용 안됨, 무시)

// 예제 2) setTimeout
// 1-1. 일반 함수
const ex5 = {
  name: "ex5",
  main() {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

ex5.main(); // window 객체 출력
// setTimeout이 내부 구현 사항에 따라 콜백 함수를 호출

// 1-2. 화살표 함수
const ex6 = {
  name: "ex6",
  main() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};

ex6.main(); // ex6 객체 출력
