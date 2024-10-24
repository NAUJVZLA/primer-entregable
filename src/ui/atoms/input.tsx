import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";

interface IInput {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode; // Aceptamos un ícono como prop
  variant?: "primary" | "secondary"; // Agregamos la propiedad variant
}

// Estilos para el input con variantes
const InputStyle = styled.input<{ theme: any; variant?: string }>`
  padding: 10px 10px 10px 40px; /* dimensiones de mi input*/
  border: 1px solid
    ${({ theme, variant }) =>
      variant === "primary" // estado de vacantes y de compañias de un mismo input de primero de vacante segundo de compañias !
        ? theme.colors.border
        : theme.colors.border};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.colors.primaryFocusShadow // Borde secundario al hacer focus en cuando hace focus a input en compañia
        : theme.colors
            .ColorVacantesFocus}; /* Cambia el color del borde al hacer focus  a vacantes*/
    box-shadow: 0 0 0 3px
      ${({ theme, variant }) =>
        variant === "secondary"
          ? theme.colors.ColorVacantesFocus // color cuando le hago focus a vacantes
          : theme.colors
              .primaryFocusShadow}; /* focus de compañias cuando hago focus  */
  }

  &:active {
    opacity: 0.8;
  }
`;

// Contenedor del ícono
const IconWrapper = styled.span<{ theme: any }>`
  position: absolute;
  left: 10px; /* Posicionamos el ícono dentro del input */
  svg {
    font-size: 1.2em;
  }
`;

// Contenedor del input que permite la posición del ícono
const InputWrapper = styled.div<{ theme: any }>`
  position: relative; /* Necesario para que el ícono esté dentro del input */
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  variant = "primary", // Variante por defecto es "default"
}: IInput) => {
  const { theme } = useTheme(); // Obtenemos el tema actual del contexto

  return (
    <InputWrapper theme={theme}>
      {icon && <IconWrapper theme={theme}>{icon}</IconWrapper>}
      <InputStyle
        theme={theme}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant={variant} // Pasamos la variante al estilo
      />
    </InputWrapper>
  );
};
