import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoPlayer from './video_player';
import VideoPreviewList from './video_preview_list';

const API_KEY = "AIzaSyAOCM2eRhEOZUSJamIDZ5NNK03P9k3Zl_4";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });

  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="app-component">
        <SearchBar/>
        <div className="row">
          <VideoPlayer
            video={selectedVideo} />
          <VideoPreviewList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={videos} />
        </div>
      </div>
    );
  }
}
