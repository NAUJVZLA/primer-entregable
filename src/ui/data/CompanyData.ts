export interface Company {
  id: number;
  title: string;
  description: string;
  location: string;
}

export const companyData: Company[] = [
  {
    id: 1,
    title: "TechCorpaaa2",
    description:
      "Compañía de tecnología enfocada en el desarrollo de software.",
    location: "Bogotá, Colombia",
  },
  {
    id: 2,
    title: "DesignHubaaa2",
    description: "Agencia de diseño y experiencia del usuario.",
    location: "Medellín, Colombia",
  },

  // ... más compañías
];
