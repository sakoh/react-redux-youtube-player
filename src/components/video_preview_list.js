import React from 'react';
import VideoPreview from './video_preview';

const VideoPreviewList = (props) => {
  const videosList = props.videos.map((video) => {
    return (
      <VideoPreview
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videosList}
    </ul>
  );
};

export default VideoPreviewList;
