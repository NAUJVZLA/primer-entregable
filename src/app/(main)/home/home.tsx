import React, { useState } from "react";
import styled from "styled-components";
import {
  SearchContainer,
  Tab,
  TabContainer,
} from "@/assets/public/style/Styles-Piepagina";
import { Building2, Briefcase, Search, PlusCircle } from "lucide-react";
import { Button } from "@/ui/atoms/boton";
import ThemeToggleButton from "@/ui/atoms/botonDark";
import { Input } from "@/ui/atoms/input";
import { CompanyName } from "@/ui/atoms/CompanyName";
import { Panel } from "@/ui/Moleculas/PanelContenedor";
import { ContenedorP } from "@/ui/Moleculas/ContenedorPrincipal";
import Piepagina from "@/ui/Footer/Piepagina";
import { JobCard } from "@/ui/Organism/JobCard";
import { companyData } from "@/ui/data/CompanyData"; // Asegúrate de que la ruta sea correcta
import { jobData } from "@/ui/data/Jobdata"; // Asegúrate de que la ruta sea correcta

export default function AdminPanel() {
  const Icono = styled(Search)`
    color: rgb(75, 85, 99);
  `;

  // Estado para manejar la pestaña activa (vacantes o compañías)
  const [activeTab, setActiveTab] = useState("vacantes");

  // Estado para el valor de búsqueda
  const [searchValue, setSearchValue] = useState("");

  // Función para manejar el cambio en el input de búsqueda
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <ContenedorP>
      <Panel>
        <CompanyName>Panel De Administracion</CompanyName>
        <ThemeToggleButton />
        <TabContainer>
          <div>
            <Tab
              active={activeTab === "vacantes"}
              onClick={() => setActiveTab("vacantes")}
            >
              <p className="flex items-center">
                <Briefcase className="mr-2" /> Vacantes
              </p>
            </Tab>
            <Tab
              active={activeTab === "companias"}
              onClick={() => setActiveTab("companias")}
            >
              <p className="flex items-center">
                <Building2 className="mr-2" /> Compañias
              </p>
            </Tab>
          </div>
          <div>
            <Input
              icon={<Icono />}
              placeholder={
                activeTab === "vacantes"
                  ? "Agregar Vacantes"
                  : "Agregar Compañias"
              }
              value={searchValue} // Pasamos el valor del estado
              onChange={handleSearchChange} // Pasamos la función que maneja el cambio
              variant={activeTab === "vacantes" ? "secondary" : "primary"}
            />
          </div>
        </TabContainer>
        <SearchContainer>
          <h1>{activeTab === "vacantes" ? "Vacantes" : "Compañias"}</h1>
          <Button
            buttonLabel="crear"
            icon={<PlusCircle />}
            variant={activeTab === "vacantes" ? "secondary" : "primary"}
          >
            {activeTab === "vacantes"
              ? "Agregar Vacantes"
              : "Agregar Compañias"}
          </Button>
        </SearchContainer>
        {activeTab === "vacantes" ? (
          <JobCard data={jobData} /> // Pasa los datos de las vacantes
        ) : (
          <JobCard data={companyData} /> // Pasa los datos de las compañías
        )}
        <Piepagina />
      </Panel>
    </ContenedorP>
  );
}
