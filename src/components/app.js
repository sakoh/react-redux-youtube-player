import { debounce } from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { connect } from 'react-redux';

import * as actions from '../actions';
import SearchBar from './search_bar';
import VideoPlayer from './video_player';
import VideoPreviewList from './video_preview_list';

class App extends Component {
  componentWillMount() {

    this.props.searchVideos('surfboards');
  }

  render() {
    const { videos, selectedVideo } = this.props;

    return (
      <div className="app-component">
        <SearchBar/>
        <div className="row">
          <VideoPlayer
            video={selectedVideo} />
          <VideoPreviewList
            videos={videos} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.video.videos, selectedVideo: state.video.selectedVideo };
}

export default connect(mapStateToProps, actions)(App);
