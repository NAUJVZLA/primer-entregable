// AddButtonWithLabel.tsx
import { StyledAddButton } from "@/assets/public/style/Styles-Piepagina";
import { Plus } from "lucide-react";
import React from "react";
import Label from "@/ui/atoms/label";

interface AddButtonWithLabelProps {
  label: string;
  buttonLabel: string;
  htmlFor?: string;
  onClick?: () => void;
}

const AddButtonWithLabel: React.FC<AddButtonWithLabelProps> = ({
  label,
  buttonLabel,
  htmlFor,
  onClick,
}) => {
  return (
    <div>
      <Label labelText={label} htmlFor={htmlFor} />
      <StyledAddButton id={htmlFor} onClick={onClick}>
        <Plus size={16} />
        {buttonLabel}
      </StyledAddButton>
    </div>
  );
};

export default AddButtonWithLabel;
