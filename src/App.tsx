import { ButtonComponent } from "./components/Button";
import { LayOut } from "./components/Layout";
import Modal from "./components/Modal";
import { useKeyEventContext } from "./context/keyeventContext";

function App() {
  const { isOpen, setIsOpen, handleClick } = useKeyEventContext();

  const handleClose = (): void => setIsOpen(false)

  return (
    <div>
      <LayOut>
        <ButtonComponent
          variant="contained"
          color="primary"
          handleClick={handleClick}
        >
          Abrir Modal [F1] || [F2] || [F3]
        </ButtonComponent>
        <Modal isOpen={isOpen} handleClose={handleClose}>
          Hola soy un modal
        </Modal>
      </LayOut>
    </div>
  );
}

export default App;
