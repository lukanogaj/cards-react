// The one of the 8 divs
import React from 'react';
import Preview from '../Preview/Preview';
import './Card.css';
const Card = () => {
  return (
    <div className='hero'>
      <div className='card'>
        <Preview />
      </div>
    </div>
  );
};

export default Card;
