import React from 'react';
import styled from 'styled-components';
import Review from './Review';

const Reviews = () => {
  return (
    <Container>
      <h2>Reviews</h2>
      <Review />
      <Review />
      <Review />
      <Review />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid blanchedalmond;
  padding: 0 6rem;
`;

export default Reviews;
