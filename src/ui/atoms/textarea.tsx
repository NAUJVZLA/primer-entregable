// /ui/atoms/textarea.tsx
import styled from "styled-components";

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  variant?: "primary" | "secondary"; // Define las variantes necesarias
}

const StyledTextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
  ${({ variant, theme }) =>
    variant === "secondary" &&
    `
      background-color:  ${({ theme }) => theme.colors.background};
      color:  ${({ theme }) => theme.colors.background};
      border-color:  ${({ theme }) => theme.colors.background};
    `}
`;

export const TextArea = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  variant,
}: TextAreaProps) => (
  <StyledTextArea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    variant={variant}
  />
);
