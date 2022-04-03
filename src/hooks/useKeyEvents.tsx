import { useState, useEffect } from "react";

export const useKeyEvents = (key: string, callback: () => void): boolean => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        e.preventDefault();
        setKeyPressed(true);
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);

  return keyPressed;
};
