
import React from 'react';
import styled from 'styled-components';
import { useTheme } from "@/context/ThemeContext";
import { Pencil, Trash2 } from "lucide-react";

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

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3<{ theme: any }>`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const CardDescription = styled.p<{ theme: any }>`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0.5rem 0;
`;

const StatusBadge = styled.span<{ status: string; theme: any }>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${({ status, theme }) =>
        status === 'OPEN' ? theme.colors.success : theme.colors.warning};
  color: ${({ theme }) => theme.colors.white};
`;

const CompanyName = styled.p<{ theme: any }>`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0.5rem 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const IconButton = styled.button<{ theme: any }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Job Card Component
export const JobCard = ({ job }: { job: Job }) => {
    const { theme } = useTheme();

    return (
        <StyledCard theme={theme}>
            <CardHeader>
                <div>
                    <CardTitle theme={theme}>{job.title}</CardTitle>
                    <CardDescription theme={theme}>{job.description}</CardDescription>
                </div>
                <StatusBadge status={job.status} theme={theme}>{job.status}</StatusBadge>
            </CardHeader>
            <CompanyName theme={theme}>Compañía: {job.company}</CompanyName>
            <CardFooter>
                <IconButton theme={theme}>
                    <Pencil size={18} />
                </IconButton>
                <IconButton theme={theme}>
                    <Trash2 size={18} />
                </IconButton>
            </CardFooter>
        </StyledCard>
    );
};

// Job Vacancies Grid
const JobVacanciesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

// Example usage
export default function Component() {
    const jobs: Job[] = [
        {
            id: 1,
            title: "Desarrollador Frontend",
            description: "Se busca desarrollador con experiencia en React",
            status: "OPEN",
            company: "TechCorp",
        },
        {
            id: 2,
            title: "Diseñador UX",
            description: "Diseñador UX con 3 años de experiencia",
            status: "PENDING",
            company: "DesignHub",
        },

        {
            id: 3,
            title: "Desarrollador Frontend",
            description: "Se busca desarrollador con experiencia en React",
            status: "OPEN",
            company: "TechCorp",
        },
        {
            id: 4,
            title: "Diseñador UX",
            description: "Diseñador UX con 3 años de experiencia",
            status: "PENDING",
            company: "DesignHub",
        },
        {
            id: 5,
            title: "Vacante 3",
            description: "Descripción de la vacante 3",
            status: "OPEN",
            company: "TechCorp",
        },
        {
            id: 7,
            title: "Vacante 4",
            description: "Descripción de la vacante 4",
            status: "OPEN",
            company: "TechCorp",
        },
        {
            id: 8,
            title: "Vacante 5",
            description: "Descripción de la vacante 5",
            status: "OPEN",
            company: "TechCorp",
        },
        {
            id: 9,
            title: "Vacante 6",
            description: "Descripción de la vacante 6",
            status: "OPEN",
            company: "TechCorp",
        },
        // ... add more job objects as needed
    ];

    return (
        <JobVacanciesGrid>
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </JobVacanciesGrid>
    );
}

// Types
type Job = {
    id: number;
    title: string;
    description: string;
    status: string;
    company: string;
};

// export const JobCard = ({ job }: { job: Job }) => (
//     <Card className="w-full">
//         <CardHeader>
//             <div className="flex justify-between items-start">
//                 <JobInfo title={job.title} description={job.description} />
//                 <StatusBadge status={job.status} />
//             </div>
//         </CardHeader>
//         <CardContent>
//             <CompanyName name={job.company} />
//         </CardContent>
//         <CardFooter>
//             <ActionButtons />
//         </CardFooter>
//     </Card>
// )