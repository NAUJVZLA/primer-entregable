import React, { useState } from "react";
import { Button } from "@/ui/atoms/boton";
import { Input } from "@/ui/atoms/input";
import { TextArea } from "@/ui/atoms/textarea";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

interface VacancyFormProps {
  onSubmit: (formData: any) => void;
}

export const VacancyForm = ({ onSubmit }: VacancyFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("OPEN");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { title, description, status, company };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <label>Título</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la vacante"
          variant="secondary"
        />
      </FormGroup>
      <FormGroup>
        <label>Descripción</label>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          variant="secondary"
        />
      </FormGroup>
      <FormGroup>
        <label>Estado</label>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="OPEN">OPEN</option>
          <option value="CLOSED">CLOSED</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <label>Compañía</label>
        <Select value={company} onChange={(e) => setCompany(e.target.value)}>
          <option value="">Selecciona una compañía</option>
          <option value="Company 1">Company 1</option>
          <option value="Company 2">Company 2</option>
        </Select>
      </FormGroup>
      <Button type="submit" variant="secondary">
        Agregar Vacante
      </Button>
    </form>
  );
};
