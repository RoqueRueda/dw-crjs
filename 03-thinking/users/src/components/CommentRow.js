import React from 'react';
import faker from 'faker';

const CommentRow = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Roque
        </a>
        <div className="metadata">
          <span className="date">Today at 4:00PM</span>
        </div>
        <div className="text">Hello World!</div>
      </div>
    </div>
  );
}

export default CommentRow;