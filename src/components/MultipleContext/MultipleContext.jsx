import { useState } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { PatosContext } from "../../context/PatosContext";
import { Child } from "./Child";

export const MultipleContext = () => {
  const [isDarkMode] = useState(true);

  const obj = {
    name: "pepe",
    al: () => alert()
  }


  return (
    <PatosContext.Provider value={obj}>
      <ThemeContext.Provider value={isDarkMode}>
        <h1>Múltiple Context</h1>
        <Child />
      </ThemeContext.Provider>
    </PatosContext.Provider>
  );
};
