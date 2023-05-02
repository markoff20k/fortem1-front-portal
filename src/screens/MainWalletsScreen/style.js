import styled from "styled-components";
import imgGrafic from "../../assets/grafic.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #131313;
`;

export const Content = styled.div`
  width: calc(100% - 280px);
  position: absolute;
  top: 80px;
  left: 280px;
  padding: 20px;
  

  @media screen and (max-width: 1440px) {
    width: calc(100% - 240px);
    top: 70px;
    left: 240px;
  }
`;

export const Graphic = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .patrimony {
    padding: 20px;

    .patrimony-total,
    .patrimony-available {
      padding: 20px 150px 20px 20px;
      border-radius: 10px;
      // background-color: ${(props) => props.theme.backgroundCards};
      background-color: var(--header-background-color);

      p {
        margin-bottom: 20px;
      }

      span {
        padding: 5px 25px;
        border-radius: 10px;
        color: var(--primary-text-color);
        background-color: #22c55e;
      }

      h4 {
        margin-bottom: 30px;
      }

      .btn-deposit {
        button {
          padding: 10px;
          border-radius: 10px;
          border: none;
          // color: var(--primary-text-color);
          // background-color: ${(props) => props.theme.primary};

          &:nth-child(2) {
            margin-left: 20px;
            border: 1px solid blue;
            color: var(--primary-text-color);
            background-color: transparent;
          }
        }
      }

      &:nth-child(1) {
        margin-bottom: 20px;
      }
    }
  }

  .patrimony-graphic {
    flex: 1;
    border-radius: 10px;
    background-color: var(--header-background-color);

    .patrimony-graphic-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px;

      p {
        font-size: 22px;
      }

      select {
        padding: 12px 100px 12px 12px;
        border-radius: 10px;
        text-align: left !important;
        color: var(--primary-text-color);
        background-color: ${(props) => props.theme.lineDeposit};
      }
    }

    .patrimony-graphic-bottom {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 20px;

      img {
        width: 245px;
      }

      .grafic {
        width: 245px;
        height: 245px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url(${imgGrafic});
        background-repeat: no-repeat, repeat-x;
        background-position: top right, center;
        background-size: contain;

        h5 {
          font-size: 18px;
          text-align: center;
          line-height: 20px;

          span {
            font-size: 15px;
          }
        }
      }

      .ativos {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: start;

        p {
          /* display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center; */

          div {
            width: 15px;
            height: 15px;
            background-color: #f9a912;
            border-radius: 20px;
            margin-left: -24px;
            margin-bottom: -20px;

            @media screen and (max-width: 1440px) {
              right: 265px;
            }
          }

          &:nth-child(2) {
            div {
              width: 15px;
              height: 15px;
              background-color: #11ecc7;
              border-radius: 20px;
              margin-left: -24px;
              margin-bottom: -20px;

              @media screen and (max-width: 1440px) {
                right: 265px;
              }
            }
          }
        }
      }
    }
  }
`;

export const Report = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .reports {
    width: 99%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 0 17px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: var(--header-background-color);
    padding: 20px 50px;

    p {
      font-size: 22px;
      margin: 0;
    }

    button {
      padding: 8px 15px;
      margin: 0 5px;
      border: none;
      border-radius: 10px;
      // color: ${(props) => props.theme.white};
      // background-color: ${(props) => props.theme.lineDeposit};
      

      &:nth-child(2) {
        // background-color: ${(props) => props.theme.backgroundTertiary};
      }
    }

    select {
      padding: 12px 60px 12px 12px;
      margin-right: 10px;
      border-radius: 10px;
      text-align: left !important;
      // color: ${(props) => props.theme.white};
      // background-color: ${(props) => props.theme.lineDeposit};
    }
  }

  .reports-table {
    width: 99%;
    margin: 0 0 0 17px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    // background-color: ${(props) => props.theme.backgroundCards};
    padding: 20px 40px;
  }

  .pagination {
    width: 100%;
    justify-content: end;
    font-size: 14px;
    padding: 30px 15px 0px 0;

    @media screen and (max-width: 1440px) {
      width: 100%;
    }

    span {
      padding: 1px 20px;
      margin: 0 10px;
      border-radius: 5px;
      // color: ${(props) => props.theme.white};
      // border: 1px solid ${(props) => props.theme.white};
    }

    button {
      padding: 2px 10px;
      margin: 0 5px;
      border: none;
      border-radius: 7px;
      // color: ${(props) => props.theme.white};
      // background-color: ${(props) => props.theme.primary};
    }
  }
`;
