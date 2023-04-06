import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundCards};

  &:nth-child(n + 2):nth-child(-n + 4) {
    margin-left: 20px;
  }

  p {
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 25px;

    @media screen and (max-width: 1440px) {
      font-size: 18px;
    }
  }

  h2 {
    margin-bottom: 15px;
    @media screen and (max-width: 1440px) {
      font-size: 25px;
    }
  }

  button {
    margin-bottom: 20px;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;

    @media screen and (max-width: 1440px) {
      font-size: 14px;
    }
  }
`;
