// Context의 상태에서 배열이나 객체를 다루는 경우 (객체 / 모달)
import { createContext, useContext, useMemo, useState } from "react";

const ModalValueContext = createContext();
const ModalActionsContext = createContext();

function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    visible: false,
    message: "",
  });

  const actions = useMemo(
    () => ({
      open(message) {
        setModal({ message, visible: true });
      },
      close() {
        setModal((prev) => ({ ...prev, visible: false }));
      },
    }),
    []
  );

  return (
    <ModalValueContext.Provider value={modal}>
      <ModalActionsContext.Provider value={actions}>
        {children}
      </ModalActionsContext.Provider>
    </ModalValueContext.Provider>
  );
}

function useModalValue() {
  const value = useContext(ModalValueContext);
  if (value === undefined) {
    throw new Error("useModalValue should be used within ModalProvider");
  }
  return value;
}

function useModalActions() {
  const value = useContext(ModalActionsContext);
  if (value === undefined) {
    throw new Error("useModalActions should be used within ModalProvider");
  }
  return value;
}

function Sixth() {
  return (
    <ModalProvider>
      <Page />
      <Modal />
    </ModalProvider>
  );
}

function Page() {
  const { open, close } = useModalActions();

  return (
    <div>
      <button onClick={() => open("OPEN")}>OPEN</button>
      <button onClick={close}>CLOSE</button>
    </div>
  );
}

function Modal() {
  const { visible, message } = useModalValue();

  return <>{visible && <div>{message}</div>}</>;
}

export default Sixth;
