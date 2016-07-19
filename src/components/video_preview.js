import React, { Component } from 'react';

export default class VideoPreview extends Component {

  render() {
    const { title } = this.props;

    return (
      <li className="video-preview-component">{title}</li>
    );
  }
}
