import React from 'react';

const VideoPreview = ({ title, thumbnails: { default: { url } } }) => {
  return (
    <li className="video-preview-component list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={url} alt=""/>
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );

}

export default VideoPreview;
