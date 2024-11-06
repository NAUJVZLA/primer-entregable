import React from "react";
import {
  CardFooter,
  EmptyState,
  JobCard,
  JobVacanciesGrid,
  StyledCard,
} from "./JobCard";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "../atoms/boton";
import { Pencil, Trash2 } from "lucide-react";

interface Vacancy {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface Company {
  id: string;
  name: string;
  location: string;
  contact: string;
  vacants: Vacancy[];
}

interface CompanyCardProps {
  companies: Company[];
}

const CompanyCard: React.FC<CompanyCardProps> = ({ companies = [] }) => {
  const { theme } = useTheme();

  // Si no hay datos, mostrar un mensaje
  if (!companies || companies.length === 0) {
    return (
      <EmptyState theme={theme}>
        No hay vacantes disponibles en este momento.
      </EmptyState>
    );
  }
  return (
    <JobVacanciesGrid>
      {companies.length > 0 ? (
        companies.map((company) => (
          <StyledCard key={company.id} theme={theme}>
            <h2>{company.name}</h2>
            <p>Ubicación: {company.location}</p>
            <p>Contacto: {company.contact}</p>
            {company.vacants.length > 0 ? (
              company.vacants.map((vacant) => (
                <JobCard
                  key={vacant.id}
                  job={{
                    title: vacant.title,
                    description: vacant.description,
                    location: company.location, // ubicación de la compañía
                  }}
                />
              ))
            ) : (
              <p>No hay vacantes disponibles.</p>
            )}
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
        ))
      ) : (
        <p>No hay compañías disponibles.</p>
      )}
    </JobVacanciesGrid>
  );
};

export default CompanyCard;
