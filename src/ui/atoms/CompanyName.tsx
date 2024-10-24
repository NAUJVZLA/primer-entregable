import { useTheme } from "@/context/ThemeContext"; // Asegúrate de que la ruta sea correcta
import styled from "styled-components";

interface InameCompany {
  children?: React.ReactNode; // Aceptamos children como contenid
  name?: string;
}

// Atomizar el párrafo estilizado
const NameCompany = styled.h1`
  color: ${({ theme }) => theme.colors.Titulos};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const CompanyName = ({ children }: InameCompany) => {
  const { theme } = useTheme(); // Usa el hook aquí para obtener el tema

  return (
    <NameCompany theme={theme}>
      {children} {/* Mostramos el contenido pasado como children */}
    </NameCompany>
  );
};
