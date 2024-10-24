"use client";
import React, { useState } from "react";
import styled from "styled-components";
import {
  Company,
  Header,
  IconButton,
  IconContainer,
  JobDescription,
  JobStatus,
  JobTitle,
  Page,
  Panel,
  SearchContainer,
  SearchInput,
  Tab,
  TabContainer,
} from "@/assets/public/style/Styles-Piepagina";
import {
  Building2,
  Briefcase,
  Calculator,
  Edit2,
  Trash2,
  Search,
} from "lucide-react";
import { Card, Grid } from "@/assets/public/style/Style-ContenedorP";
import AddButtonWithLabel from "@/ui/moleculas/AddButtonWithLabel";
import { Button } from "@/ui/atoms/boton";
import ThemeToggleButton from "@/ui/atoms/botonDark";
import { Input } from "@/ui/atoms/input";

export const jobData = [
  {
    title: "Desarrollador Frontend",
    description: "Se busca desarrollador con experiencia en React",
    status: "OPEN",
    company: "TechCorp",
  },
  {
    title: "Diseñador UX",
    description: "Diseñador UX con 3 años de experiencia",
    status: "PENDING",
    company: "DesignHub",
  },
  {
    title: "Vacante 3",
    description: "Descripción de la vacante 3",
    status: "OPEN",
    company: "TechCorp",
  },
  {
    title: "Vacante 4",
    description: "Descripción de la vacante 4",
    status: "OPEN",
    company: "TechCorp",
  },
  {
    title: "Vacante 5",
    description: "Descripción de la vacante 5",
    status: "OPEN",
    company: "TechCorp",
  },
  {
    title: "Vacante 6",
    description: "Descripción de la vacante 6",
    status: "OPEN",
    company: "TechCorp",
  },
];

export default function AdminPanel() {
  const Icono = styled(Calculator)`
    color: white;
  `;
  const [activeTab, setActiveTab] = useState("vacantes");
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddVacante(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Page>
      <Panel>
        <Header>Panel de Administración</Header>
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
                <Building2 className="mr-2" /> Compañías
              </p>
            </Tab>
          </div>

          <div>
            <Input icon={<Search />} placeholder="Buscar" />
          </div>
        </TabContainer>
        <SearchContainer>
          <h1>Vacantes</h1>
          <Button buttonLabel="crear" icon={<Calculator />} variant="secondary">
            {"Agregar Vacantes"}
          </Button>
        </SearchContainer>
        <Grid>
          {jobData.map((job, index) => (
            <Card key={index}>
              <JobTitle>{job.title}</JobTitle>
              <JobDescription>{job.description}</JobDescription>
              <JobStatus>Estado: {job.status}</JobStatus>
              <Company>Compañía: {job.company}</Company>
              <IconContainer>
                <IconButton>
                  <Edit2 size={16} />
                </IconButton>
                <IconButton>
                  <Trash2 size={16} />
                </IconButton>
              </IconContainer>
            </Card>
          ))}
        </Grid>
      </Panel>
    </Page>
  );
}
