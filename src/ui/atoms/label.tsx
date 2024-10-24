import React from "react";

interface LabelProps {
  labelText: string | null;
  htmlFor?: string; // Útil si quieres asociar el label con un input
}

const Label: React.FC<LabelProps> = ({ labelText, htmlFor }) => {
  return <label htmlFor={htmlFor}>{labelText}</label>;
};

export default Label;
