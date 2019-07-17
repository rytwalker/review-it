import React, { useState } from 'react';
import Stars from '../Stars/Stars';
import styled from 'styled-components';
import FormInput from './FormInput';
import { darkGrey, primary } from '../../utils/';

function Form() {
  const [formData, setFormData] = useState({ item: '', name: '', review: '' });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <StyledForm>
      <FormGroup>
        <label htmlFor="stars">Rating:</label>
        <Stars id="stars" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="item">What are you reviewing?</label>
        <FormInput
          handleChange={handleChange}
          name="item"
          value={formData.item}
          placeholder="Some okay product"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="name">Name:</label>
        <FormInput
          handleChange={handleChange}
          name="name"
          value={formData.name}
          placeholder="John Doe"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleChange}
          placeholder="It all began on Christmas morning..."
        />
      </FormGroup>
      <FormButton>Submit Review</FormButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  color: ${darkGrey};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-bottom: 5px;
    color: ${darkGrey};
  }
  input,
  textarea {
    font-size: inherit;
    padding: 8px 10px;
    border: 1px solid #efefef;
    border-radius: 4px;
    background: #eee;
    transition: all 0.5s;
    &:focus {
      outline: none;
      border: 1px solid ${primary};
    }
  }
  textarea {
    height: 200px;
  }
`;

const FormButton = styled.button`
  font-size: inherit;
  font-family: inherit;
  color: #fff;
  background: ${primary};
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
`;

export default Form;
