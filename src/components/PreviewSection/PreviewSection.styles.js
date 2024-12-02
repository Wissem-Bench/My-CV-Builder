import styled from "styled-components";

export const PreviewContainer = styled.div`
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 90vh; /* Prevent overflow on smaller screens */
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

export const InfoContainer = styled.div`
  margin-bottom: 2rem;
  h4 {
    font-size: 1.25rem;
    color: #444;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: #666;
    margin: 0.25rem 0;
  }
`;

export const ExperienceContainer = styled.div`
  h4 {
    font-size: 1.25rem;
    color: #444;
    margin-bottom: 0.5rem;
  }
`;

export const ExperienceItem = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  p {
    font-size: 1rem;
    color: #555;
    margin: 0.25rem 0;
  }

  strong {
    font-weight: 700;
  }
`;
