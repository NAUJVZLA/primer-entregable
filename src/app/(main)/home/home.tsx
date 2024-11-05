import React, { useState, useEffect } from "react";
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
import { Modal } from "@/ui/Organism/Modal";
import { CompanyForm } from "@/ui/forms/CompanyForm";
import { VacancyForm } from "@/ui/forms/VacancyForm ";

import endpoints from "@/app/utils/api";
import CompanyCard from "@/ui/Organism/CompanyCard";

export default function AdminPanel() {
  const Icono = styled(Search)`
    color: rgb(75, 85, 99);
  `;

  const [activeTab, setActiveTab] = useState("vacantes");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobData, setJobData] = useState([]); // Estado para almacenar las vacantes
  const [companyData, setCompanyData] = useState([]); // Estado para almacenar las compañías

  useEffect(() => {
    const fetchVacants = async () => {
      try {
        const response = await fetch(endpoints.vacants.getAllVacants);
        const data = await response.json();
        const vacants = data.content.map((vacant: any) => ({
          id: vacant.id,
          title: vacant.title,
          description: vacant.description,
          company: vacant.company,
        }));
        setJobData(vacants);
      } catch (error) {
        console.error("Error fetching vacants:", error);
      }
    };

    const fetchCompanies = async () => {
      try {
        const response = await fetch(endpoints.company.getAllCompanies);
        const data = await response.json();
        setCompanyData(data); // Asumiendo que 'data' es un array de compañías
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchVacants();
    fetchCompanies();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
                  ? "Buscar Vacantes"
                  : "Buscar Compañias"
              }
              value={searchValue}
              onChange={handleSearchChange}
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
            onClick={openModal}
          >
            {activeTab === "vacantes"
              ? "Agregar Vacantes"
              : "Agregar Compañias"}
          </Button>
        </SearchContainer>

        {activeTab === "vacantes" && jobData.length > 0 && (
          <JobCard data={jobData} />
        )}

        {activeTab === "companias" && companyData.length > 0 && (
          <CompanyCard companies={companyData} /> // Muestra las compañías aquí
        )}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {activeTab === "vacantes" ? (
            <VacancyForm onClose={closeModal} />
          ) : (
            <CompanyForm onClose={closeModal} />
          )}
        </Modal>
      </Panel>
      <Piepagina />
    </ContenedorP>
  );
}
