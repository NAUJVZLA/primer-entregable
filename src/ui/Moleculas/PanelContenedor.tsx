import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext"; // Asegúrate de que esta ruta sea correcta

interface PanelProps {
  children: React.ReactNode; // Aceptamos children como contenido
}

// Definimos el componente estilizado
const StylePanel = styled.div<{ theme: any }>`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
`;

// Componente Panel
export const Panel = ({ children }: PanelProps) => {
  const { theme } = useTheme(); // Usa el hook aquí para obtener el tema

  return (
    <StylePanel theme={theme}>
      {children} {/* Mostramos el contenido pasado como children */}
    </StylePanel>
  );
};
