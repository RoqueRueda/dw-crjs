import React from 'react'
import Pyramid from './Pyramid'

const BackgroundPyramid = (props) => {
    return (
        <Pyramid levels={30} bgImg={'https://hmp.me/cf1j'}>
          This pyramid has background
        </Pyramid>
    );
}

export default BackgroundPyramid;