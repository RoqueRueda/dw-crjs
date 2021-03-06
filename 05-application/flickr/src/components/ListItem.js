import React from 'react';
import { connect } from 'react-redux';
import { selectImage } from '../actions';

const ListItem = props => {
  const { img } = props;

  if (img === undefined) {
    return (
      <div className="ui placeholder">
        <div className="image header">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="item" onClick={event => props.selectImage(img)}>
      <img 
        className="ui avatar image" 
        alt={img.id} 
        src={img.url_s} />
      <div className="content">
        <h3 className="header">{img.id}</h3>
        <div className="description">{img.title}</div>
      </div>
    </div>
  );
}

export default connect(null, { selectImage })(ListItem);