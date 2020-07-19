import styled from 'styled-components';

export const ImgFormContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 1rem;
  border: 1px solid white;
  box-shadow: 0 1px 2px white;
  background-color: transparent;
  text-align: center;

  div {
    display: flex;
    margin-top: 0.5rem;
    justify-content: center;

    & > * {
      box-sizing: content-box;
    }
  }

  input {
    font-family: 'Roboto', sans-serif;
    color: white;
    background-color: inherit;
    padding: 4px 4px;
    border: 1px solid white;
    transition: all 0.2s ease;
    font-size: 0.8rem;
    width: 70%;

    &:hover,
    &:focus {
      border: 1px solid #66ff66;
      box-shadow: 1px 1px 3px #66ff66;
    }
  }

  button {
    outline: none;
    background-color: transparent;
    padding: 4px 8px;
    font-size: 0.8rem;

    color: white;
    border: 1px solid white;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover,
    &:active {
      color: #66ff66;
      border: 1px solid #66ff66;
      box-shadow: 1px 1px 3px #66ff66;
    }
  }
`;
