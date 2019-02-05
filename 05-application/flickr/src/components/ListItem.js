import React from 'react';

const ListItem = props => {
  return (
    <div className="item">
      <img className="ui avatar image" alt="alt" />
      <div className="content">
        <a href="/" className="header">Roque</a>
        <div className="description">An item of the list</div>
      </div>
    </div>
  );
}

export default ListItem;