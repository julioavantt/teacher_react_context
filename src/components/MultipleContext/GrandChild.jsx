import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { PatosContext } from "../../context/PatosContext";
import { MolestandoALosDemas } from "./MolestandoALosDemas";

export const GrandChild = () => {
  const isDarkMode = useContext(ThemeContext);
  const {name, al} = useContext(PatosContext);

  return (
    <div>
      GrandChild
      <hr />
      Modo oscuro: {JSON.stringify(isDarkMode)}
      <hr />
      <mark>Múltiple context con patos: {name}</mark>
      <MolestandoALosDemas title={name} al={al} />
    </div>
  );
};
