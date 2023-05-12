import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  justify-content: space-around;

  h3 {
    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }
  }

  p {
    align-self: flex-start;

    @media screen and (max-width: 1440px) {
      font-size: 13px;
    }
    span {
      color: ${(props) => props.theme.primary};
    }
  }

  ol {
    li {
      @media screen and (max-width: 1440px) {
        font-size: 13px;
      }
    }
  }

  .autentication {
    width: 100%;
    margin-top: 30px;
  }

  .mfa {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 40px 0;

    img {
      margin-right: 25px;
      margin-left: -20px;
    }

    div {
      align-self: end;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 15px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.backgroundTertiary};

        img {
          margin-left: 15px;
          margin-right: 0;
          cursor: pointer;
        }
      }
    }
  }
  .autentication-input {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: -18px;

    input {
      width: 30px;
      text-align: center;
      color: ${(props) => props.theme.search} !important;
    }

    button {
      margin-left: 10px;
      padding: 14px 20px;
      border: none;
      border-radius: 10px;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.primary};
    }
  }

  ol {
    width: 100%;
    padding-left: 15px;

    li {
      margin: 12px 0;

      span {
        color: ${(props) => props.theme.primary};
      }
    }
  }

  .password-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    padding: 10px 0;

    div {
      width: 100%;

      .input-password {
        width: 98%;
      }
    }
  }

  .password-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;

    div {
      button {
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.primary};
        align-self: flex-start;

        &:nth-child(1) {
          border: 1px solid ${(props) => props.theme.primary};
          color: ${(props) => props.theme.primary};
          background-color: transparent;
          margin-right: 25px;
        }
      }
    }
  }
`;
