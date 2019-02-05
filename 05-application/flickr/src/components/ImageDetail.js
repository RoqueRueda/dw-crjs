import React from 'react';

const ImageDetail = props => {
  return (
    <div className="ui card">
      <div className="image">
        <img alt="alt" />
      </div>
      <div className="content">
        <a href="/" className="header">Roque</a>
        <div class="meta">
          <span class="date">05/02/2019</span>
        </div>
        <div class="description">
          Image description
        </div>
      </div>
    </div>
  );
}

export default ImageDetail;