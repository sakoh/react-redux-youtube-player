import React from 'react';
import VideoPreview from './video_preview';

const VideoPreviewList = ({ videos }) => {

  const videosList = videos.map(({ etag, snippet }) =>
    <VideoPreview key={etag} {...snippet}/>
  );

  return (
    <ul className="video-preview-list-component col-md-4 list-group">
      {videosList}
    </ul>
  );
};

export default VideoPreviewList;
