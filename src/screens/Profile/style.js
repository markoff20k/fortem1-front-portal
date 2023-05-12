import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: calc(100vw - 350px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 130px;
  left: 325px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.backgroundCards};

  @media screen and (max-width: 1440px) {
    max-width: calc(100vw - 321px);
    top: 105px;
    left: 277px;
  }

  .header-profile {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    .btn-gerencial {
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 25px;
        margin: 0;

        @media screen and (max-width: 1440px) {
          font-size: 18px;
        }
      }

      button {
        border: none;
        padding: 12px 20px;
        margin: 0 10px;
        border-radius: 15px;
        background-color: ${(props) => props.theme.backgroundTertiary};

        @media screen and (max-width: 1440px) {
          font-size: 14px;
        }
      }
    }

    .img-progfile {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      margin-top: 30px;
      border-radius: 20px;
      background-color: ${(props) => props.theme.backgroundTertiary};

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          &:nth-child(n + 1) {
            margin-left: 10px;
          }

          &:nth-child(3) {
            margin-top: 50px;
            margin-left: -131px;
          }
        }
      }

      button {
        border: none;
        padding: 12px 20px;
        margin: 0 10px;
        border-radius: 15px;
        background-color: ${(props) => props.theme.primary};
      }
    }
  }
`;
