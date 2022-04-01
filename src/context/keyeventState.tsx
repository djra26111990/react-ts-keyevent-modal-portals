import React, { useState } from "react";
import KeyEventContext from "./keyeventContext";
import { useKeyEvents } from "../hooks/useKeyEvents";

export const KeyEventState: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  useKeyEvents("F1", () => {
    setIsOpen(true);
  });

  useKeyEvents("F2", () => {
    setIsOpen(true);
  });

  useKeyEvents("F3", () => {
    setIsOpen(true);
  });
  return (
    <KeyEventContext.Provider value={{ isOpen, setIsOpen, handleClick }}>
      {children}
    </KeyEventContext.Provider>
  );
};
