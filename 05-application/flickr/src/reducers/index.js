import { combineReducers } from 'redux';

// Reducer
const selectImageReducer = 
  (selectedImage = undefined, action) => {
  if(action.type === 'SELECTED_IMAGE') {
      return action.payload;
  }

  return selectedImage;
}

export default combineReducers({
  selectedImage: selectImageReducer
})