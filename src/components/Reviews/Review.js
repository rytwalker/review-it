import React from 'react';
import styled from 'styled-components';
import Stars from '../Stars/Stars';

const Review = ({ review }) => {
  return (
    <ReviewContainer>
      <HeadingContainer>
        <ReviewHeading>{review.item}</ReviewHeading>
        <Stars isSmall={true} activeStars={review.rating} />
      </HeadingContainer>

      <ByLine>By: {review.name}</ByLine>
      <ReviewBody>{review.review}</ReviewBody>
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

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
