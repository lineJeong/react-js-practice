import MyParagraph from "./MyParagraph";

function DemoOutput(props) {
  // props가 변경되지 않아도 부모 컴포넌트인 App이 재실행/재평가 되면 자식 컴포넌트인 DemoOutput도 재실행/재평가 됨
  // DemoOutput에는 변경 사항이 없으므로 Real DOM에는 변화 없음
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
}

export default DemoOutput;
