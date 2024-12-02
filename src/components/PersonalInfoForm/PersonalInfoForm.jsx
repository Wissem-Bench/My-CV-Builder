import React, { useState } from "react";
import {
  FormContainer,
  FieldWrapper,
  SubmitButton,
} from "./PersonalInfoForm.styles";

const PersonalInfoForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      <FieldWrapper>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FieldWrapper>
      <SubmitButton type="submit">Save</SubmitButton>
    </FormContainer>
  );
};

export default PersonalInfoForm;
