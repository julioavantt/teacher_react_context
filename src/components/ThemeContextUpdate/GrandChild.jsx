import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { GrandGrandChild } from "./GrandGrandChild";
import { UpdaterContext } from "./UpdaterContext";

export const GrandChild = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div>
      GrandChild
      <hr />
      Modo oscuro: {JSON.stringify(isDarkMode)}
      <hr />
      <UpdaterContext />
    </div>
  );
};
