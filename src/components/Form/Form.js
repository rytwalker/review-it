import React, { useState } from 'react';
import Stars from '../Stars/Stars';
import styled from 'styled-components';

function Form() {
  return (
    <StyledForm>
      <FormGroup>
        <label>Rating:</label>
        <Stars />
      </FormGroup>
      <FormGroup>
        <label>What are you reviewing?</label>
        <input type="text" />
      </FormGroup>
      <FormGroup>
        <label>Name:</label>
        <input type="text" />
      </FormGroup>
      <FormGroup>
        <label>Review:</label>
        <textarea />
      </FormGroup>
      <button>Submit Review</button>
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
  color: #31393c;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-bottom: 5px;
    color: #31393c;
  }
  input,
  textarea {
    font-size: inherit;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  textarea {
    height: 200px;
  }
`;

export default Form;
