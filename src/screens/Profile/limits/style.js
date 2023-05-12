import styled from "styled-components";

export const Container = styled.div`
  width: 89%;
  height: calc(100vh - 290px);
  margin-top: 50px;

  @media screen and (max-width: 1440px) {
    height: calc(100vh - -20px);
  }

  .div-header-limits {
    display: flex;
    flex-direction: column;
  }

  .div-cards-limits {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    .card-limit-01,
    .card-limit-02,
    .card-limit-03 {
      max-width: 297px;
      width: 100%;
      height: 500px;
      border-radius: 20px;
      margin: 0 30px;
      background-color: ${props => props.theme.backgroundTertiary};

      .header {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -3px;
        font-size: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-color: ${(props) => props.theme.lineDeposit};

        img {
          margin-right: 10px;
        }
      }

      .limits-current {
        position: absolute;
        padding: 4px 15px;
        margin: 9px !important;
        border-radius: 8px;
        font-size: 14px;
        background-color: ${(props) => props.theme.primary};
      }

      .validation{
        margin-top: 50px;
        margin-left: 10px;
        font-size: 14px;

        h5{
          font-size: 18px;
        }

        h4{
          color: ${props => props.theme.secundary} !important;
          font-weight: 700;
          margin: 0;
        }
      }

      .functionalities {
        margin-top: 10px;
        margin-left: 10px;
        font-size: 14px;

        h5{
          font-size: 18px;
        }

        h4{
          color: ${props => props.theme.secundary} !important;
          font-weight: 700;
          margin: 0;
        }
      }

      .available-limits{
        margin-top: 10px;
        margin-left: 10px;
        font-size: 14px;

        h5{
          font-size: 18px;
        }

        h4{
          color: ${props => props.theme.secundary} !important;
          font-weight: 700;
          margin: 0;
        }
      }

      button{
        width: 90%;
        margin-left: 15px;
        margin-top: 20px;
        padding: 8px 0;
        border: none;
        border-radius: 10px;

        color: ${props => props.theme.white} ;
        background-color: ${props => props.theme.primary} ;
      }
    }
  }
`;
