import { useState, useEffect } from "react";

export const useKeyEvents = (key: string, callback: () => void): boolean => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === key) {
        setKeyPressed(true);
        callback();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === key) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key, callback]);

  return keyPressed;
};
