import React from "react";
import Rectangle from './Rectangle'

const Pyramid = ({ children, levels, bgImg }) => {
  const generatedFloors = [];

  for(let i = 0; i < levels; i ++) {
    generatedFloors.push(
      <Rectangle
        height={20}
        width={20 * (i + 1)}
        bgImg={bgImg} />
    );
  }

  return (
    <div>
      {generatedFloors}
      <br />
      {children}
    </div>
  )
}

export default Pyramid;