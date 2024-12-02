// src/components/ExperienceForm.jsx
import React, { useState } from "react";
import {
  FormContainer,
  ExperienceItem,
  ButtonContainer,
  AddButton,
} from "./ExperienceForm.styles";

const ExperienceForm = ({ onSave }) => {
  const [experiences, setExperiences] = useState([]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleChange = (id, field, value) => {
    const updatedExperiences = experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const handleRemoveExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(experiences);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Expériences professionnelles</h2>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id}>
          <div>
            <label>Poste :</label>
            <input
              type="text"
              value={experience.title}
              onChange={(e) =>
                handleChange(experience.id, "title", e.target.value)
              }
              required
            />
          </div>

          <div>
            <label>Entreprise :</label>
            <input
              type="text"
              value={experience.company}
              onChange={(e) =>
                handleChange(experience.id, "company", e.target.value)
              }
              required
            />
          </div>

          <div>
            <label>Date de début :</label>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              value={experience.startDate}
              onChange={(e) =>
                handleChange(experience.id, "startDate", e.target.value)
              }
              required
            />
          </div>

          <div>
            <label>Date de fin :</label>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              value={experience.endDate}
              onChange={(e) =>
                handleChange(experience.id, "endDate", e.target.value)
              }
            />
          </div>

          <div>
            <label>Description :</label>
            <textarea
              value={experience.description}
              onChange={(e) =>
                handleChange(experience.id, "description", e.target.value)
              }
            />
          </div>

          <button
            type="button"
            onClick={() => handleRemoveExperience(experience.id)}
          >
            Supprimer cette expérience
          </button>
        </ExperienceItem>
      ))}
      <ButtonContainer>
        <AddButton type="button" onClick={handleAddExperience}>
          Ajouter une expérience
        </AddButton>
        <AddButton type="submit">Enregistrer</AddButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default ExperienceForm;
