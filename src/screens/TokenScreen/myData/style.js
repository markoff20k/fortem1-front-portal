import styled from "styled-components";

export const InsideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 10px;
`;

export const MyData = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  border-radius: 20px;
  background-color: var(--input-background-color);
  margin-top: 20px;
  margin-bottom: 20px;
  

  div {
    display: flex;
    align-items: center;
    position: relative;

    .my-data-description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin-left: 30px;

      @media screen and (max-width: 1440px) {
        margin-left: 20px;
      }

      p {
        margin: 0 15px;

        @media screen and (max-width: 1440px) {
          font-size: 15px;
        }
      }
    }

    img {
      @media screen and (max-width: 1440px) {
        width: 60px;
      }
    }

    button {
      position: absolute;
      left: 55px;
      top: 35px;
      background-color: transparent;
      border: none;

      @media screen and (max-width: 1440px) {
        left: 50px;
      }

      img {
        @media screen and (max-width: 1440px) {
          width: 30px;
        }
      }

      .icon-camera {
        position: absolute;
        top: 10px;
        left: 9px;

        @media screen and (max-width: 1440px) {
          width: 15px;
          top: 8px;
          left: 8px;
        }
      }
    }
  }

  .sair {
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    color: var(--primary-text-color);
    background-color: ${(props) => props.theme.primary};
  }
`;

export const PersonalData = styled.div`
  width: 88%;
  margin-top: 20px;

  h3 {
    font-size: 1.5em;
    @media screen and (max-width: 1440px) {
      font-size: 1.2em;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 10px;

    &:nth-child(1) {
      margin-left: -10px;
    }

    label {
      font-size: 0.9em;
      height: 1em;
      line-height: 1em;
      color: rgb(146, 146, 157) !important;
    }
    label[data-shrink="true"] {
      margin-top: 5px;
    }

    input {
      color: var(--input-text-color) !important;
      border: 1px solid var(--input-border-color);
      border-radius: 12px;
      box-sizing: border-box;
      height: 40px;
    }
  }
`;

export const Address = styled.div`
  width: 88%;
  margin-top: 20px;

  h3 {
    font-size: 1.5em;
    @media screen and (max-width: 1440px) {
      font-size: 1.2em;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 10px;

    &:nth-child(1) {
      margin-left: -10px;
    }
  }

  label {
    font-size: 0.9em;
    height: 1em;
    line-height: 1em;
    color: rgb(146, 146, 157) !important;
  }
  label[data-shrink="true"] {
    margin-top: 5px;
  }

  input {
    color: var(--input-text-color) !important;
    // height: 40px;
  }

  .input-postal {
    width: 49%;
  }
`;

export const Buttons = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    padding: 12px 20px;
    border: none !important;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border-radius: 10px;

  }
`;

export const Terms = styled.div`
  width: 90%;
  margin: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    border-radius: 12px;
    background-color: var(--input-background-color);
    padding: 12px;
    margin: 0 10px;
  }
`;
