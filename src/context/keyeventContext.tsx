import { createContext, useContext } from "react";
import { IEventContext } from "../types/Interfaces";

const initialState = {
  isOpen: false,
  setIsOpen: () => {},
  handleClick: () => {}
};
const KeyEventContext = createContext<IEventContext>(initialState);

export const useKeyEventContext = () => useContext(KeyEventContext);

export default KeyEventContext;
