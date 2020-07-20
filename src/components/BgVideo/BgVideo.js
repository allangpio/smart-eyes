import React from 'react';
import {VideoContainer} from './style.js';
import video from './bg.mp4';

const BgVideo = () => {
  return (
    <VideoContainer>
      <video autoPlay muted loop id="myVideo" className="video">
        <source src={video} type="video/mp4" />
      </video>
    </VideoContainer>
  );
};

export default BgVideo;
