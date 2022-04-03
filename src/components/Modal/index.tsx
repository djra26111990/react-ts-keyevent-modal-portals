import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Paper, Box } from "@material-ui/core";
import { IModalProps } from "../../types/Interfaces";
import { ButtonComponent } from "../Button";
import Portal from "../Portal";
import "./modalStyle.css";

function Modal({ children, isOpen, handleClose }: IModalProps) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <Portal id="modalId">
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        nodeRef={nodeRef}
        classNames="modal"
      >
        <div className="modal" ref={nodeRef}>
          <ButtonComponent
            variant="contained"
            color="secondary"
            handleClick={handleClose}
          >
            Close
          </ButtonComponent>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "20rem",
                height: "20rem",
              },
            }}
          >
            <Paper elevation={3}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: '4rem',
                }}
              >
                {children}
              </div>
            </Paper>
          </Box>
        </div>
      </CSSTransition>
    </Portal>
  );
}
export default Modal;
