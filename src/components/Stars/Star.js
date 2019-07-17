import React from 'react';

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
      return 'orange';
    } else if (isActive) {
      return 'red';
    } else if (isHovered) {
      return 'yellow';
    } else {
      return 'black';
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
