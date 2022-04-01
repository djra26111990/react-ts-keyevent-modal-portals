import { ButtonComponent } from "./componentes/Button";
import { LayOut } from "./componentes/Layout";
import Modal from "./componentes/Modal";
import { useKeyEventContext } from "./context/keyeventContext";

function App() {
  const { isOpen, setIsOpen, handleClick } = useKeyEventContext();

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
        <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          Hola soy un modal
        </Modal>
      </LayOut>
    </div>
  );
}

export default App;
