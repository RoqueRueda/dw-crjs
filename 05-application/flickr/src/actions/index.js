import axios from 'axios';

const API_KEY_FLICKR = "b5b00d16f3e70b5aa0157d79edaab8b5";

// Action creator
export const selectImage = (image) => {
  return {
    type: 'SELECTED_IMAGE',
    payload: image 
  };
}

export const fetchImages = searchTerm => async dispatch => {
    const response = await axios.get(`https://api.flickr.com/services/rest/?
      method=flickr.photos.search&
      api_key=${API_KEY_FLICKR}&
      format=json&
      text=${searchTerm}&
      nojsoncallback=true&
      per_page=40&
      extras=url_s`);

    dispatch({type: 'FETCH_IMAGES', payload: response.data.photos.photo});
  }