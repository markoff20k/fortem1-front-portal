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

  .password {
    margin-top: 30px;
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

      input {
        color: ${(props) => props.theme.search} !important;
      }
    }
  }

  .password-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;

    ul {
      li {
        @media screen and (max-width: 1440px) {
          font-size: 13px;
        }
      }
    }

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
