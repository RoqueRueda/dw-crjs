import React, { Component } from "react";
import Rectangle from './Rectangle'

class Pyramid extends Component {

  constructor(props) {
    super(props);
    const { levels, bgImg } = props;
    const generatedFloors = [];
    for(let i = 0; i < levels; i ++) {
      generatedFloors.push(
        <Rectangle
          height={20}
          width={20 * (i + 1)}
          bgImg={bgImg} />
      );
    }

    this.state = {
      floors: generatedFloors
    }
  }

  render() {
    return (
      <div>
        {this.state.floors}
        <br />
        {this.props.children}
      </div>
    );
  }
}

export default Pyramid;