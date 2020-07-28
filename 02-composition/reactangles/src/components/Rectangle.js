import React from 'react';

const Rectangle = ({ height, width, bgImg }) => {
  return (
    <div style={{
      height:height, 
      width:width,
      backgroundImage: `url(${bgImg})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center' }} />
  );
};

export default Rectangle;