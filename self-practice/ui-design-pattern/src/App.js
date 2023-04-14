import styled from "styled-components";
import AutocompleteSample from "./components/Autocomplete/AutocompleteSample";

import ModalSample from "./components/ModalSample";
import TabSample from "./components/TabSample";
import TagSample from "./components/TagSample";
import ToggleSample from "./components/ToggleSample";

const AppBlock = styled.div`
  width: 512px;
  margin: 10rem auto;
  padding: 1rem;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Components = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & + & {
    margin-top: 3rem;
  }
`;

function App() {
  return (
    <AppBlock>
      <Components>
        <h2>Modal</h2>
        <ModalSample />
      </Components>
      <Components>
        <h2>Tab</h2>
        <TabSample />
      </Components>
      <Components>
        <h2>Tag</h2>
        <TagSample />
      </Components>
      <Components>
        <h2>Toggle</h2>
        <ToggleSample />
      </Components>
      <Components>
        <h2>Autocomplete</h2>
        <AutocompleteSample />
      </Components>
    </AppBlock>
  );
}

export default App;
