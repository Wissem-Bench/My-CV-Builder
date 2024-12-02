import React from "react";
import {
  PreviewContainer,
  SectionTitle,
  InfoContainer,
  ExperienceContainer,
  ExperienceItem,
} from "./PreviewSection.styles";

const PreviewSection = ({ personalInfo, experiences }) => {
  // Check if personalInfo and experiences exist before rendering
  //   if (!experiences) return null;
  //   else console.log(experiences);
  //   console.log(experiences);
  return (
    <PreviewContainer>
      <SectionTitle>CV Preview</SectionTitle>
      {/* Display personal info */}
      {personalInfo && (
        <InfoContainer>
          <h4>Personal Information:</h4>
          <p>
            <strong>First Name:</strong> {personalInfo.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {personalInfo.lastName}
          </p>
          <p>
            <strong>Email:</strong> {personalInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {personalInfo.phone}
          </p>
        </InfoContainer>
      )}
      {/* Display experiences */}
      {experiences.length > 0 && (
        <ExperienceContainer>
          <h4>Professional Experiences:</h4>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index}>
              <p>
                <strong>Job Title:</strong> {exp.title}
              </p>
              <p>
                <strong>Company:</strong> {exp.company}
              </p>
              <p>
                <strong>Dates:</strong> {exp.startDate} -{" "}
                {exp.endDate || "Present"}
              </p>
              <p>
                <strong>Description:</strong> {exp.description}
              </p>
            </ExperienceItem>
          ))}
        </ExperienceContainer>
      )}
    </PreviewContainer>
  );
};

export default PreviewSection;
