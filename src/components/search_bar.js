import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: "Starting value" };
  }

  render() {
    return (
      <div className="search-bar-component form-group row">
        <input
          className="form-control"
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
          type="text"
          placeholder="Search"/>
      </div>
    );
  }
}
