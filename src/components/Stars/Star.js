import React from 'react';
// import styled from 'styled-components';
import { darkGrey } from '../../utils';

function Star({
  isActive,
  isHovered,
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
    <span
      style={{
        fontSize: '60px',
        color: updateColor(),
        cursor: 'pointer'
      }}
      onClick={handleClick}
      onMouseEnter={() => setNumOfHoverStars(starNumber)}
      onMouseLeave={handleMouseLeave}
    >
      *
    </span>
  );
}

export default Star;
