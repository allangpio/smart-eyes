import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;

  .margin-left {
    margin-left: 1rem;
  }

  p {
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #66ff66;
      text-decoration: underline;
      text-shadow: 1px 2px 4px #66ff66;
      transform: translateY(-1px) scale(1.01);
    }
  }
`;
