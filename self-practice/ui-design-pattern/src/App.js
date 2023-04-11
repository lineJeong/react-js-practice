import styled from "styled-components";

import ModalSample from "./components/ModalSample";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;

  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppBlock>
      <ModalSample />
    </AppBlock>
  );
}

export default App;
