import React, { useState } from 'react';
import Star from './Star';

function Stars() {
  const [numOfStars] = useState(5);
  const [numOfActiveStars, setNumOfActiveStars] = useState(0);
  const [numOfHoverStars, setNumOfHoverStars] = useState(0);

  function handleReset() {
    setNumOfActiveStars(0);
  }

  const starArr = [];
  for (let i = 0; i < numOfStars; i++) {
    starArr.push(i);
  }
  return (
    <div>
      {starArr.map(s => (
        <Star
          key={s}
          starNumber={s + 1}
          setNumOfActiveStars={setNumOfActiveStars}
          setNumOfHoverStars={setNumOfHoverStars}
          isActive={numOfActiveStars >= s + 1}
          isHovered={numOfHoverStars >= s + 1}
        />
      ))}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stars;
