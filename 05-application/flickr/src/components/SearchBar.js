import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../actions';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: ''}
	}

	onInputChange(text) {
		this.setState({ term: text });
	}

	render() {
		return (
			<center>
				<div className="ui action input" style={{ marginTop: 16 }}>
					<input 
						type="text" 
						placeholder="Search images..."
						value={this.state.term}
						onChange={event=> 
						  this.onInputChange(event.target.value)} />
					<button 
            className="ui button"
            onClick={event => this.props.fetchImages(this.state.term)}>Search</button>
				</div>
			</center>
		);
	}
}

export default connect(null, { fetchImages })(SearchBar);