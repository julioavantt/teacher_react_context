import { useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { PatosContext } from "../../context/PatosContext";
import { Child } from "./Child";

export const MultipleContext = () => {
  const [isDarkMode] = useState("patos");

  return (
    <PatosContext.Provider value={"cuac"}>
      <ThemeContext.Provider value={isDarkMode}>
        <h1>Múltiple Context</h1>
        <Child />
      </ThemeContext.Provider>
    </PatosContext.Provider>
  );
};
