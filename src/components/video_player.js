import React from 'react';

export default function VideoPlayer({ video }) {
  if(!video) {
    return (
      <div>...Loading</div>
    );
  }

  const { snippet: { title, description }, id: { videoId } } = video;

  const url = `https://youtube.com/embed/${videoId}`;

  return (
    <div className="video-player-component col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
};
