import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentRow from './components/CommentRow';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">      
      <ApprovalCard>
        Are you sure?
      </ApprovalCard>
      <ApprovalCard>
        <CommentRow 
          author="Sarai" 
          time="Today at 5:00PM" 
          comment="Hi, nice post!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentRow 
          author="Luis" 
          time="Yesterday at 4:00PM" 
          comment="Hello World"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentRow 
          author="Roque" 
          time="Yesterday at 2:00PM" 
          comment="Cool post!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
