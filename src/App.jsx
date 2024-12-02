import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import PersonalInfoForm from "./components/PersonalInfoForm/PersonalInfoForm";
import ExperienceForm from "./components/ExperienceForm/ExperienceForm";
import PreviewSection from "./components/PreviewSection/PreviewSection";
import {
  PageContainer,
  FormSection,
  PreviewSection as StyledPreviewSection,
} from "./App.styles";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [experiences, setExperiences] = useState([]);

  const handleSavePersonalInfo = (data) => setPersonalInfo(data);

  const handleSaveExperience = (data) => setExperiences(data);

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <FormSection>
          <PersonalInfoForm onSave={handleSavePersonalInfo} />
          <ExperienceForm onSave={handleSaveExperience} />
        </FormSection>
        <StyledPreviewSection>
          <PreviewSection
            personalInfo={personalInfo}
            experiences={experiences}
          />
        </StyledPreviewSection>
      </PageContainer>
    </>
  );
};

export default App;
