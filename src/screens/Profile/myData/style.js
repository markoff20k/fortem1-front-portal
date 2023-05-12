import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 10px;
`;

export const MyData = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.backgroundTertiary};

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
    color: ${(props) => props.theme.white};
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
      color: ${(props) => props.theme.search} !important;
      height: 1em;
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
    color: ${(props) => props.theme.search} !important;
    height: 1em;
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
    border: none;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border-radius: 10px;

    &:nth-child(1) {
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primary};
      margin-right: 10px;
    }
  }
`;

export const Terms = styled.div`
  width: 88%;
  margin: 15px 30px;
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
    background-color: ${(props) => props.theme.backgroundTertiary};
    padding: 12px;
    margin: 0 10px;
  }
`;
