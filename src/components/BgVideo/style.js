import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;

  .video {
    width: 100%;
    object-fit: cover;
  }
`;
