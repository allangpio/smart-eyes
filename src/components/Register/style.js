import styled from 'styled-components';

export const RegisterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
  height: 450px;
  padding: 1.5rem 1rem;

  background-color: transparent;
  border: 0.5px solid white;
  border-radius: 8px;
  box-shadow: 1px 1px 2px white, inset 0.5px 0.5px 1px light-grey;

  color: white;

  .form {
    &__title {
      font-size: 2.5rem;
      margin: 0 auto 2rem auto;
      text-align: center;
    }

    &__field {
      margin-bottom: 1.3rem;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__input {
      color: inherit;
      font-family: inherit;
      font-size: 1rem;

      width: 80%;

      background: transparent;
      border: 0.5px solid white;
      border-radius: 8px;
      outline: none;
      padding: 4px 8px;
      transition: all 0.2s ease;

      &:hover,
      &:focus {
        border: 0.5px solid #66ff66;
        box-shadow: 1px 1px 2px #66ff66;
      }
    }

    &__label {
      margin-bottom: 0.4rem;
      font-size: 1.2rem;
    }

    .btn {
      display: block;
      width: 30%;
      text-align: center;
      margin: 1rem auto;
      text-decoration: none;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.4s ease;
      background-color: transparent;
      backface-visibility: hidden;

      cursor: pointer;

      font-family: inherit;
      font-size: 1rem;
      &--login {
        margin-top: 2.5rem;
        border: 0.5px solid white;
        outline: none;
        &:hover,
        &:active {
          background-color: #66ff66;
          color: black;
          transform: translateY(-1px) scale(1.05);
          border: none;
          box-shadow: 1px 1px 2px #66ff66;
        }
      }

      &--register {
        &:hover,
        &:active {
          background-color: black;
          color: #66ff66;
          transform: translateY(-1px) scale(1.05);

          box-shadow: 1px 1px 2px #66ff66;
        }
      }
    }
  }
`;
