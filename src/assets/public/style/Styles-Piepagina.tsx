import styled from "styled-components";


export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between; // Cambiar aquí
  align-items: center; // Alinear verticalmente al centro (opcional)
  margin-bottom: 1rem;
`;

export const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "#a855f7" : "#6b7280")};
  border-bottom: 2px solid
    ${(props) => (props.active ? "#a855f7" : "transparent")};
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  width: 200px;
`;

export const StyledAddButton = styled.button`
  background: #a855f7;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const JobTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const JobDescription = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const JobStatus = styled.span`
  font-size: 0.8rem;
  color: #10b981;
`;

export const Company = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const PaginationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
`;
