import Button from "./components/Button";

function Sass() {
  const buttonClickHandler = () => {
    console.log("클릭함");
  };

  return (
    <>
      <div className="buttons">
        <Button size="large" onClick={buttonClickHandler}>
          Button
        </Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          Button
        </Button>
        <Button color="gray">Button</Button>
        <Button size="small" color="gray">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          Button
        </Button>
        <Button color="pink">Button</Button>
        <Button size="small" color="pink">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>
          Button
        </Button>
        <Button color="gray" outline>
          Button
        </Button>
        <Button size="small" color="pink" outline>
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" fullWidth color="gray">
          BUTTON
        </Button>
        <Button size="large" fullWidth color="pink">
          BUTTON
        </Button>
      </div>
    </>
  );
}

export default Sass;
