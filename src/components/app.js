import { debounce } from 'lodash';
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

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    const videoSearch = debounce(term => { this.videoSearch(term) }, 300);

    return (
      <div className="app-component">
        <SearchBar onSearchTermChange={videoSearch}/>
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
