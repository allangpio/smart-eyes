import React from 'react';
import {ImgContainer} from './style.js';

const FaceRecognition = ({box, imageUrl}) => {
  return (
    <ImgContainer>
      <img id="inputImage" src={imageUrl} alt="" />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    </ImgContainer>
  );
};

export default FaceRecognition;
