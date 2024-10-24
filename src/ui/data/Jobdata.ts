// Definición de la interfaz Job
export interface Job {
  id: number; // Identificador único de la vacante
  title: string; // Título de la vacante
  description: string; // Descripción de la vacante
  company: string; // Nombre de la compañía que ofrece la vacante
}

// Ejemplo de uso con datos de jobData
export const jobData: Job[] = [
  {
    id: 1,
    title: "Desarrollador Frontendd1",
    description: "Se busca desarrollador con experiencia en React",
    company: "TechCorp",
  },
  {
    id: 2,
    title: "Diseñador UXx1",
    description: "Diseñador UX con 3 años de experiencia en React",
    company: "DesignHub",
  },
];
