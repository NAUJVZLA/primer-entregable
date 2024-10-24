export const lightTheme = {
  colors: {
    primary: "#ec4899", // Normal companias
    primaryHover: "#db2777", //   hover  companias
    secondary: "#a855f7", // normal vacantes
    secondaryHover: "#9333f3", // nomal vacantes
    delete: "#28a745",
    deleteHover: "#218838",
    error: "#dc3545",
    errorHover: "#c82333",
    warning: "#ffc107",
    warningHover: "#e0a800",
    background: "#ffffff",
    text: "#ffffff",
    border: "#e5e7eb", //border de input de buscar
    primaryFocusShadow: " #fbcfe8", //border focus para el input
  },
};

export const darkTheme = {
  colors: {
    primary: "#1db954",
    primaryHover: "#18a054",
    secondary: "#0070f3",
    secondaryHover: "#005bb5",
    success: "#28a745",
    successHover: "#218838",
    error: "#dc3545",
    errorHover: "#c82333",
    warning: "#ffc107",
    warningHover: "#e0a800",
    background: "#000000",
    text: "#ffffff",
    border: "#333333",
  },
};

// Exporta los temas para usarlos en la app
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type Theme = typeof lightTheme;
