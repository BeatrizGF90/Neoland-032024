import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((v) => v + 1);
  const decrement = () => setValue((v) => v - 1);
  const reset = () => setValue(initialValue);

  return {
    increment,
    decrement,
    reset,
    value,
  };
};
