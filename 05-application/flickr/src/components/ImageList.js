import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';

const ImageList = props => {
  const { images } = props;
  if (images === []) {
    return (
      <div className="ui relaxed divided selection list">
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
    );
  }
  
  const rows = images.map(img => {
    return (
      <ListItem key={img.id} img={img} />
    )
  })
  return (
    <div className="ui relaxed divided selection list">
      {rows}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ImageList);