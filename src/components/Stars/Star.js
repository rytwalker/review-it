import React from 'react';
import styled from 'styled-components';
import { darkGrey } from '../../utils';

function Star({
  isActive,
  isHovered,
  isSmall = false,
  starNumber,
  setNumOfActiveStars,
  setNumOfHoverStars
}) {
  function handleMouseLeave() {
    setNumOfHoverStars(0);
  }

  function handleClick() {
    setNumOfActiveStars(starNumber);
    setNumOfHoverStars(0);
  }

  function updateColor() {
    if (isActive && isHovered) {
      return '#F08A4B';
    } else if (isActive) {
      return '#D78A76';
    } else if (isHovered) {
      return '#F3CA40';
    } else {
      return `${darkGrey}`;
    }
  }
  return (
    <StarContainer
      updateColor={updateColor}
      onClick={!isSmall ? handleClick : null}
      onMouseEnter={!isSmall ? () => setNumOfHoverStars(starNumber) : null}
      onMouseLeave={!isSmall ? handleMouseLeave : null}
      isSmall={isSmall}
    >
      <svg
        width={isSmall ? '18' : '36'}
        height={isSmall ? '18' : '36'}
        viewBox="0 0 96 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z"
          fill={updateColor()}
        />
      </svg>
    </StarContainer>
  );
}

const StarContainer = styled.span`
  margin-right: 3px;
  cursor: ${({ isSmall }) => (isSmall ? 'default' : 'pointer')};
`;

export default Star;
