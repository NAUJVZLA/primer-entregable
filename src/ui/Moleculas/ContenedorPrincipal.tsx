import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext"; // Asegúrate de que esta ruta sea correcta

interface PanelProps {
    children: React.ReactNode; // Aceptamos children como contenido
}

// Definimos el componente estilizado
const StyleContenedorP = styled.div<{ theme: any }>`

min-height: 100vh;
background: ${({ theme }) => theme.colors.backgroundlineargradient};
display: flex;
justify-content: center;
align-items: center;
font-family: "Inter", sans-serif;
`;

// Componente Panel
export const ContenedorP = ({ children }: PanelProps) => {
    const { theme } = useTheme(); // Usa el hook aquí para obtener el tema

    return (
        <StyleContenedorP theme={theme}>
            {children} {/* Mostramos el contenido pasado como children */}
        </StyleContenedorP>
    );
};
