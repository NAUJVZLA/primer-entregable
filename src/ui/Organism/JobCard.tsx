// JobCard.tsx
import React from "react";
import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../atoms/boton";

// Estilos para la tarjeta de trabajo
const StyledCard = styled.div<{ theme: any }>`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const JobVacanciesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: -1rem;
`;

const CardTitle = styled.h3<{ theme: any }>`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.Titulos};
  margin: 0;
  font-weight: bold;
`;

const CardDescription = styled.p<{ theme: any }>`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.Texto};
  margin: 0.5rem 0;
`;

const CompanyName = styled.p<{ theme: any }>`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.Texto};
  margin: 0.5rem 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;

interface JobCardProps {
  data: Array<{
    id: number;
    title: string;
    description: string;
    company: {
      id: string;
      name: string;
      location: string;
      contact: string;
    };
  }>;
}

export const JobCard: React.FC<JobCardProps> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <JobVacanciesGrid>
      {data.map((job) => (
        <StyledCard key={job.id} theme={theme}>
          <div>
            <CardTitle theme={theme}>{job.title}</CardTitle>
            <CardDescription theme={theme}>{job.description}</CardDescription>
          </div>
          <CompanyName theme={theme}>Compañía: {job.company.name}</CompanyName>
          <CardFooter>
            <Button variant="none" aria-label="Editar">
              <Pencil />
            </Button>
            <Button variant="none" aria-label="Eliminar">
              <Trash2 />
            </Button>
          </CardFooter>
        </StyledCard>
      ))}
    </JobVacanciesGrid>
  );
};
