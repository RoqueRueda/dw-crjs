import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="wide column">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        <div className="nine wide column"></div>
        <div className="seven wide column">
          <ImageList />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));