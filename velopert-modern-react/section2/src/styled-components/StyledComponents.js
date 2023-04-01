import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Button from "./components/Buttons";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function StyledComponents() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}
    >
      <AppBlock>
        <ButtonGroup>
          <Button>BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="small">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink" size="large">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="small" outline>
            BUTTON
          </Button>
          <Button color="gray" outline>
            BUTTON
          </Button>
          <Button color="pink" size="large" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button color="gray" size="large" fullWidth>
            BUTTON
          </Button>
          <Button color="pink" size="large" fullWidth onClick={onClick}>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
      <Dialog
        title="삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={dialog}
      >
        데이터를 정말로 삭제하시겠습니까?
      </Dialog>
    </ThemeProvider>
  );
}

export default StyledComponents;
