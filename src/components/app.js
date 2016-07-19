import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoPlayer from './video_player';
import VideoPreviewList from './video_preview_list';

export default class App extends Component {
  render() {
    return (
      <div className="app-component">
        <SearchBar/>
        <div className="row">
          <VideoPlayer/>
          <VideoPreviewList/>
        </div>
      </div>
    );
  }
}
