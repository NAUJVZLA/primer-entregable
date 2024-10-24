import React from "react";

import { companyData } from "../data/CompanyData"; // Asegúrate de que el archivo contenga los datos de las compañías
import { JobCard } from "./JobCard";

const CompanyCard = () => {
  return (
    <div>
      {companyData.length > 0 ? (
        companyData.map((company) => (
          <JobCard
            key={company.id} // Cambia 'company.id' si el identificador es diferente
            job={{
              title: company.title, // Cambia esto según el formato de tus datos
              description: company.description,
              location: company.location,
            }}
          />
        ))
      ) : (
        <p>No hay compañías disponibles.</p>
      )}
    </div>
  );
};

export default CompanyCard;
