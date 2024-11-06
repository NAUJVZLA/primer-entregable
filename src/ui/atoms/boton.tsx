import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";

interface IButton {
  variant: "primary" | "secondary" | "delete" | "error" | "warning" | "none";
  children?: React.ReactNode;
  buttonLabel?: string;
  htmlFor?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: string;
}

const ButtonStyle = styled.button<{ theme: any; variant: string }>`
  background-color: ${({ theme, variant }) =>
    variant === "none"
      ? "transparent"
      : theme.colors[variant] || "transparent"};
  color: ${({ theme, variant }) =>
    variant === "none" ? "inherit" : theme.colors.text};

  /* Ajustamos el padding si tiene borde */
  padding: ${({ variant, theme }) =>
    variant === "none"
      ? "8px"
      : theme.colors.border
      ? "8px 18px" // Menor padding si hay borde
      : "2px 24px"}; // Mayor padding si no hay borde

  /* Configuración del borde */
  border: ${({ theme, variant }) =>
    variant === "none"
      ? theme.colors.border
        ? `2px solid ${theme.colors.border}`
        : "2px solid gray"
      : theme.colors.border
      ? `2px solid ${theme.colors.border}`
      : "none"};

  /* Borde más amplio con esquinas redondeadas */
  border-radius: ${({ variant }) => (variant === "none" ? "8px" : "20px")};

  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant !== "none" &&
      (theme.colors[`${variant}Hover`] || theme.colors[variant])};
  }

  &:active {
    opacity: ${({ variant }) => (variant !== "none" ? 0.8 : 1)};
  }
`;

const IconWrapper = styled.span<{ theme: any }>`
  display: flex;
  margin-right: 8px;
  svg {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2em;
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
