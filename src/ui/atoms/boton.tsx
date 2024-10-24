import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";

interface IButton {
  variant?: "primary" | "secondary" | "delete" | "error" | "warning";
  children: React.ReactNode;
  buttonLabel?: string;
  htmlFor?: string;
  icon?: React.ReactNode; // Aceptamos un ícono como prop
  onClick?: (e: React.MouseEvent) => void;
}

const ButtonStyle = styled.button<{ theme: any; variant: string }>`
  background-color: ${({ theme, variant }) => theme.colors[variant]};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center; /* Para alinear el contenido junto con el ícono */

  &:hover {
    background-color: ${({ theme, variant }) =>
    theme.colors[`${variant}Hover`] || theme.colors[variant]};
  }

  &:active {
    opacity: 0.8;
  }
`;

const IconWrapper = styled.span<{ theme: any }>`
  display: flex;
  margin-right: 8px; /* Espacio entre ícono y texto */
  svg {
    color: ${({ theme }) => theme.colors.text}; /* Aplicamos color al ícono */
    font-size: 1.2em; /* Tamaño del ícono */
  }
`;

export const Button = ({
  variant = "primary",
  icon,
  children,
  onClick,
}: IButton) => {
  const { theme } = useTheme();

  return (
    <ButtonStyle theme={theme} variant={variant} onClick={onClick}>
      {icon && <IconWrapper theme={theme}>{icon}</IconWrapper>} {children}
    </ButtonStyle>
  );
};
