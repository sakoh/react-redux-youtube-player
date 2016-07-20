import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VideoPreview extends Component {

  render() {
    const { video, selectVideo } = this.props;
    const { snippet: { title, thumbnails: { default: { url } } } } = video;

    return (
      <li onClick={() => selectVideo(video)} className="list-group-item video-preview-component">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={url} />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </li>
    );
  }

}

export default connect(null, actions)(VideoPreview);
