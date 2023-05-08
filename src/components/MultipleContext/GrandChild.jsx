import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { PatosContext } from "../../context/PatosContext";

export const GrandChild = () => {
  const isDarkMode = useContext(ThemeContext);
  const soyPato = useContext(PatosContext);

  return (
    <div>
      GrandChild
      <hr />
      Modo oscuro: {JSON.stringify(isDarkMode)}
      <hr />
      <mark>Múltiple context con patos {soyPato}</mark>
    </div>
  );
};
