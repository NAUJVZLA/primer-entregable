import React from "react";
import { useTheme } from "@/context/ThemeContext"; // Asegúrate de importar desde la ruta correcta
import { themes } from "../themes/theme";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{ padding: "10px", cursor: "pointer" }}
    >
      Cambiar a {theme === themes.light ? "darkTheme" : "lightTheme"}
    </button>
  );
};

export default ThemeToggleButton;
