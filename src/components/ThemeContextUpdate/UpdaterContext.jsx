import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const UpdaterContext = () => {
  const { setIsDarkMode } = useContext(ThemeContext);

  return (
    <>
      <hr />
      <button
        style={{ marginLeft: 0 }}
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        Update context value
      </button>
    </>
  );
};
