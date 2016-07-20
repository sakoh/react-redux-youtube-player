import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoPlayer from './video_player';
import VideoPreviewList from './video_preview_list';

const API_KEY = "AIzaSyAOCM2eRhEOZUSJamIDZ5NNK03P9k3Zl_4";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });

  }

  render() {
    const { videos } = this.state;
    return (
      <div className="app-component">
        <SearchBar/>
        <div className="row">
          <VideoPlayer />
          <VideoPreviewList videos={videos} />
        </div>
      </div>
    );
  }
}
