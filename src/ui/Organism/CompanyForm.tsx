import React, { useState } from "react";
import { Button } from "@/ui/atoms/boton";
import { Input } from "@/ui/atoms/input";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

interface CompanyFormProps {
    onSubmit: (formData: any) => void;
}

export const CompanyForm = ({ onSubmit }: CompanyFormProps) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { name, location, contact };
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <label>Nombre</label>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre de la compañía"
                />
            </FormGroup>
            <FormGroup>
                <label>Ubicación</label>
                <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ubicación"
                />
            </FormGroup>
            <FormGroup>
                <label>Contacto</label>
                <Input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Información de contacto"
                />
            </FormGroup>
            <Button type="submit" variant="primary">
                Agregar Compañía
            </Button>
        </form>
    );
};
