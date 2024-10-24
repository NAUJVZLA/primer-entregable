import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";

interface IInput {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode; // Aceptamos un ícono como prop
}

// Estilos para el input
const InputStyle = styled.input<{ theme: any }>`
  padding: 10px 10px 10px 40px; /* Aumentamos padding-left para dejar espacio para el ícono */
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) =>
    theme.colors.primaryFocus}; /* Cambia el color del borde al hacer focus */
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryFocusShadow}; /* Sombra en el foco */
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
      />
    </InputWrapper>
  );
};
