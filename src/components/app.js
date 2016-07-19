import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoPlayer from './video_player';
import VideoPreviewList from './video_preview_list';

export default class App extends Component {
  render() {
    return (
      <div className="app-component">
        <div className="row">
          <SearchBar/>
        </div>
        <div className="row">
          <div className="col-md-8">
            <VideoPlayer/>
          </div>
          <div className="col-md-4">
            <VideoPreviewList/>
          </div>
        </div>
      </div>
    );
  }
}
