import React, { Component } from 'react';
import VideoPreview from './video_preview';

export default class VideoPreviewList extends Component {

  render() {
    const videosList = this.props.videos.map(video => {
      const { etag, snippet } = video;

      return <VideoPreview key={etag} {...snippet}/>;
    });

    return (
      <ul className="video-preview-list-component col-md-4 list-group">
        {videosList}
      </ul>
    );
  }
}
