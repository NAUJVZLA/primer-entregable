import React from "react";
import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../atoms/boton";

// Interfaces
interface Company {
  id: string;
  name: string;
  location: string;
  contact: string;
}

interface Job {
  id: number;
  title: string;
  description: string;
  company: Company;
}

interface JobCardProps {
  data?: Job[];
}

// Estilos
export const StyledCard = styled.div<{ theme: any }>`
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

export const JobVacanciesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: -1rem;
`;

export const CardTitle = styled.h3<{ theme: any }>`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.Titulos};
  margin: 0;
  font-weight: bold;
`;

export const CardDescription = styled.p<{ theme: any }>`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.Texto};
  margin: 0.5rem 0;
`;

export const CompanyName = styled.p<{ theme: any }>`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.Texto};
  margin: 0.5rem 0;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;

export const EmptyState = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.Texto};
`;

export const JobCard: React.FC<JobCardProps> = ({ data = [] }) => {
  const { theme } = useTheme();

  // Si no hay datos, mostrar un mensaje
  if (!data || data.length === 0) {
    return (
      <EmptyState theme={theme}>
        No hay vacantes disponibles en este momento.
      </EmptyState>
    );
  }

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
            <Button
              variant="secondary"
              buttonLabel="Editar"
              icon={<Pencil size={16} />}
            />
            <Button
              variant="primary"
              buttonLabel="Eliminar"
              icon={<Trash2 size={16} />}
            />
          </CardFooter>
        </StyledCard>
      ))}
    </JobVacanciesGrid>
  );
};
