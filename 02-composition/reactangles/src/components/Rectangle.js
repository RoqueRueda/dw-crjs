import React from 'react';

const Rectangle = (props) => {
  return (
    <div style={{
      height:props.height, 
      width:props.width,
      backgroundImage: `url(${props.bgImg})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center' }} />
  );
};

export default Rectangle;