import styled from 'styled-components';
import logo from './logo.svg';

export const LogoContainer = styled.div`
  height: 50px;
  width: 50px;

  .logo {
    height: 100%;
    width: 100%;
    background-image: url(${logo});
    background-size: contain;
  }
`;
