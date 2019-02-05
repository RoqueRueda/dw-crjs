import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';
import axios from 'axios';

const API_KEY_FLICKR = "b5b00d16f3e70b5aa0157d79edaab8b5";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: undefined
    }

    this.executeSearch('penguin');
  }

  executeSearch = searchText => {
    axios.get(`https://api.flickr.com/services/rest/?
      method=flickr.photos.search&
      api_key=${API_KEY_FLICKR}&
      format=json&
      text=${searchText}&
      nojsoncallback=true&
      per_page=40&
      extras=url_s`).then(response => {
        this.setState({
          images: response.data.photos.photo,
          selectedImage: response.data.photos.photo[0]
        })
      }).catch(error => {
        console.log(error);
      })
  }

  onImageSelected = img => {
    this.setState({
      selectedImage: img
    });
  }

  onSearch = searchText => {
    this.executeSearch(searchText);
  }

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="wide column">
            <SearchBar onSearch={this.onSearch} />
          </div>
        </div>
        <div className="row">
          <div className="nine wide column">
            <center>
              <ImageDetail img={this.state.selectedImage} />
            </center>
          </div>
          <div className="seven wide column">
            <ImageList 
              images={this.state.images}
              onItemClick={this.onImageSelected} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));