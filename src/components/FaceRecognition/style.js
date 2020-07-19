import styled from 'styled-components';

export const ImgContainer = styled.div`
  height: 60vh;
  width: max-content;
  max-width: 800px;
  border: none;
  outline: none;

  margin: 1rem auto 2rem auto;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    display: block;
  }

  .bounding-box {
    position: absolute;
    box-shadow: 0 0 0 2px #66ff66 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
