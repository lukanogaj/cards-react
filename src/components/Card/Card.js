// The one of the 8 divs
import React from 'react';
import PreviewStatus from '../PreviewStatus/Preview';
import './Card.css';
const Card = ({ card }) => {
  return (
    <div className={card.is_preview ? 'card' : 'no-preview'}>
      {/* <PreviewStatus preview={card.is_preview} /> */}
    </div>
  );
};

export default Card;
