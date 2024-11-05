import React from "react";
import { JobCard } from "./JobCard";

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

const CompanyCard: React.FC<CompanyCardProps> = ({ companies }) => {
  return (
    <div>
      {companies.length > 0 ? (
        companies.map((company) => (
          <div key={company.id}>
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
          </div>
        ))
      ) : (
        <p>No hay compañías disponibles.</p>
      )}
    </div>
  );
};

export default CompanyCard;
