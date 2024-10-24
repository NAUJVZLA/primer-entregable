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
    backgroundlineargradient:
      "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)",
    text: "#ffffff",
    Titulos: "rgb(31, 41, 55)", // tiyulo de contenedor
    border: "#e5e7eb", //border de input de buscar QUE VA  a hacer el por defecto en ambos estados
    primaryFocusShadow: " #fbcfe8", //border focus para el input
    ColorVacantesFocus: "rgb(147, 51, 234)",
    colorP: "yellow",
  },
};

export const darkTheme = {
  colors: {
    primary: "#1db954",
    primaryHover: "#18a054",
    secondary: " #red ", //color de dark mode cuando se pasa a modo oscuro oscuro boton agregar
    secondaryHover: "#005bb5",
    success: "green", // boton de cuando esta normal con disponible
    successHover: "#218838",
    error: "#dc3545",
    errorHover: "#c82333",
    warning: "#ffc107",
    warningHover: "#e0a800",
    background: "#000000", // color background  de fondo apra modo oscuro de input
    text: "#ffffff",
    Titulos: "rgb(255, 255, 255)", // contenedor titulo color
    border: "red",
    ColorVacantes: "yellow",
  },
};

// Exporta los temas para usarlos en la app
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type Theme = typeof lightTheme;
