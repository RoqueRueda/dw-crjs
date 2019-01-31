// 1. Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import BackgroundPyramid from './components/BackgroundPyramid';

// 2. Create component
const App = () => {
  return (
    <BackgroundPyramid />
  );
};

// 3. Display component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
