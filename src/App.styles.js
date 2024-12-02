import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
`;

export const FormSection = styled.div`
  flex: 1;
  max-width: 50%; /* Forms will take half the page */
`;

export const PreviewSection = styled.div`
  flex: 1;
  max-width: 50%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
