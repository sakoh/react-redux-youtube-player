import React, { Component } from 'react';

const VideoPlayer = ({ video }) => {
  if(!video) {
    return <div>...Loading</div>;
  }

  const { snippet: { title, description }, id: { videoId } } = video;

  const url = `https://youtube.com/embed/${videoId}`;

  return (
    <div className="video-player-component col-md-8">
      <iframe className="embed-responsive-item" src={url}></iframe>
      <div className="details">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
