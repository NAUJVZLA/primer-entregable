"use client";
import React, { useState } from "react";
import styled from "styled-components";
import {
  Company,

  IconButton,
  IconContainer,
  JobDescription,
  JobStatus,
  JobTitle,
  SearchContainer,
  Tab,
  TabContainer,
} from "@/assets/public/style/Styles-Piepagina";
import {
  Building2,
  Briefcase,
  Edit2,
  Trash2,
  Search,
  PlusCircle,
} from "lucide-react";
import { Card, Grid } from "@/assets/public/style/Style-ContenedorP";
import { Button } from "@/ui/atoms/boton";
import ThemeToggleButton from "@/ui/atoms/botonDark";
import { Input } from "@/ui/atoms/input";
import { CompanyName } from "@/ui/atoms/CompanyName";
import { Panel } from "@/ui/moleculas/PanelContenedor";
import { ContenedorP } from "@/ui/moleculas/ContenedorPrincipal";
import JobCard from "@/ui/Organism/JobCard";


export const jobData = [

];

export default function AdminPanel() {
  const Icono = styled(Search)`
    color:  rgb(75, 85, 99) /* Color personalizado para que no me traiga el mismo color del texto del imput */
  `;
  const [activeTab, setActiveTab] = useState("vacantes");

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
                <Building2 className="mr-2" /> Compañías
              </p>
            </Tab>
          </div>

          <div>
            <Input icon={<Icono />} placeholder="Buscar" />
          </div>
        </TabContainer>
        <SearchContainer>
          <h1>Vacantes</h1>
          <Button buttonLabel="crear" icon={<PlusCircle />} variant="secondary">
            {"Agregar Vacantes"}
          </Button>
        </SearchContainer>
        <JobCard />
        {/* <Grid>
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
        </Grid> */}
      </Panel>
    </ContenedorP>
  );
}
