import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Review from './Review';
import { reviewData } from './reviewData';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewData);
  }, []);

  return (
    <Container>
      <h2>Reviews</h2>
      {!!reviews.length
        ? reviews.map(review => (
            <Review key={review.id} review={{ ...review }} />
          ))
        : 'Loading...'}
    </Container>
  );
};

const Container = styled.div`
  padding: 0 6rem;
`;

export default Reviews;
