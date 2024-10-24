export const lightTheme = {
  colors: {
    primary: "#ec4899", // Normal companias
    primaryHover: "#db2777", //   hover  companias
    secondary: "#a855f7", // normal vacantes
    secondaryHover: "#9333f3", // nomal vacantes
    success: "green", // boton de cuando esta normal con disponible
    delete: "#28a745",
    deleteHover: "#218838",
    error: "#dc3545",
    errorHover: "#c82333",
    warning: "#ffc107", // pendiente boton normal pendientes
    warningHover: "#e0a800",
    background: "#ffffff",
    backgroundlineargradient: "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)",
    text: "#ffffff",
    TituloH1: "rgb(31, 41, 55)", // tiyulo de contenedor 
    border: "#e5e7eb", //border de input de buscar
    primaryFocusShadow: " #fbcfe8", //border focus para el input
  },
};

export const darkTheme = {
  colors: {
    primary: "#1db954",
    primaryHover: "#18a054",
    secondary: " #ec4899 ",//color de dark mode cuando se pasa a modo oscuro
    secondaryHover: "#005bb5",
    success: "green", // boton de cuando esta normal con disponible
    successHover: "#218838",
    error: "#dc3545",
    errorHover: "#c82333",
    warning: "#ffc107",
    warningHover: "#e0a800",
    background: "#000000", // color background  de fondo apra modo oscuro de input
    text: "#ffffff",
    TituloH1: "rgb(255, 255, 255)", // contenedor titulo color
    border: "#333333",

  },
};

// Exporta los temas para usarlos en la app
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type Theme = typeof lightTheme;
