import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { IPortalProps } from "../../types/Interfaces";

type State = HTMLElement | null;

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}


function Portal({ children, id = "modal-id" }: IPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<State>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(id) as HTMLElement;
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(id);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [id]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement as HTMLElement);
}

export default Portal;
