import styled from "styled-components";

export const FormContainer = styled.form`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f4f4f4;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;

  label {
    display: block;
    font-weight: bold;
    margin-top: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    margin-top: 1rem;
    background-color: #dc3545;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const AddButton = styled.button`
  padding: 0.75rem 1.5rem;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem; /* Adds space between the buttons */
  margin-top: 1rem;
`;
