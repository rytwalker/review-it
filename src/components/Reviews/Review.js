import React from 'react';
import styled from 'styled-components';

const Review = () => {
  return (
    <ReviewContainer>
      <ReviewHeading>Slinky</ReviewHeading>
      <ByLine>By: Ryan Walker</ByLine>
      <ReviewBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore
        animi maxime sint, placeat nulla consequatur ea sequi quos repellat vel
        illum laboriosam aperiam excepturi quisquam tenetur veritatis ullam
        vero?
      </ReviewBody>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  text-align: left;
  border: 1px solid #efefef;
  border-radius: 4px;
  padding: 2rem;
  margin-bottom: 1rem;
`;

const ReviewHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ByLine = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const ReviewBody = styled.p`
  margin: 0;
`;

export default Review;
