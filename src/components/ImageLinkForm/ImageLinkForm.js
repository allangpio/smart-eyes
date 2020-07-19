import React from 'react';
import {ImgFormContainer} from './style.js';

const ImageLinkForm = ({onInputChange, onBtnSubmit}) => {
  return (
    <ImgFormContainer>
      <p>This Magic Eye will detect faces in yout pictures. Give it a try.</p>
      <div>
        <input type="text" onChange={onInputChange} />
        <button onClick={onBtnSubmit}>Detect</button>
      </div>
    </ImgFormContainer>
  );
};

export default ImageLinkForm;
