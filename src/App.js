import React from 'react';
import styled from 'styled-components';

import Form from './components/Form/Form';
import './App.css';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <h1>Review.It</h1>
      <Container>
        <Form />
        <Reviews />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
