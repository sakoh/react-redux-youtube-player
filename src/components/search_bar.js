import React, { Component } from 'react';

export default class SearchBar extends Component {

  render() {
    return (
      <div className="search-bar-component form-group">
        <input onChange={event => console.log(event.target.value)} type="text" class="form-control" placeholder="Search"/>
      </div>
    );
  }
}
