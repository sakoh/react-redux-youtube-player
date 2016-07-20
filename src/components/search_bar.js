import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import * as actions from '../actions';

class SearchBar extends Component {

  onInputChange(term) {
    debounce(this.props.searchVideos(term), 300);
  }

  render() {
    return (
      <div className="search-bar-component form-group row">
        <input
          className="form-control"
          onChange={event => this.onInputChange(event.target.value)}
          type="text"
          placeholder="Search"/>
      </div>
    );
  }
}

export default connect(null, actions)(SearchBar);
