import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentRow from './components/CommentRow';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentRow 
        author="Sarai" 
        time="Today at 5:00PM" 
        comment="Hi, nice post!"
        avatar={faker.image.avatar()} />
      <CommentRow 
        author="Luis" 
        time="Yesterday at 4:00PM" 
        comment="Hello World"
        avatar={faker.image.avatar()} />
      <CommentRow 
        author="Roque" 
        time="Yesterday at 2:00PM" 
        comment="Cool post!"
        avatar={faker.image.avatar()} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
