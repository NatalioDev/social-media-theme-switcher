import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Hook personalizado para usar el contexto
export const useTheme = () => {
    return useContext(ThemeContext);
}