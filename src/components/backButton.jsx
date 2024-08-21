import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to="/home">
      <svg
        className="back-button"
        width="50px"
        height="50px"
        viewBox="-33 -33 396.00 396.00"
        fill='#ffff'
      >
        <rect x="-33" y="-33" width="396.00" height="396.00" rx="0" fill="#7091E6" />
        <path
          className="arrow"
          d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"
        />
      </svg>
    </Link>
  );
};

export default BackButton;