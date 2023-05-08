import { ThemeContext } from "../../context/ThemeContext";

export const GrandGrandChild = () => (
  <ThemeContext.Consumer>
    {(isDarkMode) => <p>GrandGrandChild modo oscuro: {JSON.stringify(isDarkMode)}</p>}
  </ThemeContext.Consumer>
);
