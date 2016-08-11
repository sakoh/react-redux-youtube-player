import React from 'react';
import VideoPreview from './video_preview';

export default function VideoPreviewList({ videos }) {

  const videosList = videos.map(video =>
    <VideoPreview key={video.etag} video={video} />
  );

  return (
    <ul className="col-md-4 list-group">
      {videosList}
    </ul>
  );
}
