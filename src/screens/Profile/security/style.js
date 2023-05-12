import styled from "styled-components";

export const Container = styled.div`
  max-width: 89%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: space-around;
`;

export const Password = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 0;
  border-bottom: 1px solid ${(props) => props.theme.lineDeposit};

  h4 {
    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }
  }

  div {
    p {
      font-size: 14px;
      margin-top: 15px;

      @media screen and (max-width: 1440px) {
        font-size: 13px;
      }
    }
  }

  button {
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};

    @media screen and (max-width: 1440px) {
      font-size: 14px;
    }
  }
`;
export const Authentication = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 0;
  border-bottom: 1px solid ${(props) => props.theme.lineDeposit};

  h4 {
    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }
  }

  div {
    p {
      font-size: 14px;
      margin-top: 15px;

      @media screen and (max-width: 1440px) {
        font-size: 13px;
      }
    }
  }

  button {
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};

    @media screen and (max-width: 1440px) {
      font-size: 14px;
    }
  }
`;
export const Activities = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px 0;

  h4 {
    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 13px;

      @media screen and (max-width: 1440px) {
        font-size: 12px;
      }

      &:nth-child(2) {
        text-align: end;
      }
    }

    span {
      color: ${(props) => props.theme.primary};
    }
  }

  .pagination {
    width: 15%;
    align-self: end;
    font-size: 14px;
    margin-bottom: -15px;

    @media screen and (max-width: 1440px) {
      width: 25%;
    }

    span {
      padding: 1px 20px;
      border-radius: 5px;
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme.white};
    }

    button {
      padding: 2px 10px;
      border: none;
      border-radius: 7px;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.primary};
    }
  }
`;
