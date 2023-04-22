import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Content = styled.div`
  color: var(--primary-text-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--header-background-color);

  &:nth-child(n + 2):nth-child(-n + 4) {
    margin-left: 20px;
  }

  p {
    font-size: 20px;
    font-height: 400;
    line-height: 24px;
    margin-top: 20px;
    margin-bottom: 25px;
    color: var(--primary-text-color);

    @media screen and (max-width: 1440px) {
      font-size: 18px;
    }
  }

  h2 {
    color: var(--primary-text-color);
    margin-bottom: 15px;
    font-size: 24px;
    font-height: 700;
    line-height: 29px;

    @media screen and (max-width: 1440px) {
      font-size: 25px;
    }
  }

  button {
    margin-bottom: 20px;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    color: var(--primary-text-color);
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;

    @media screen and (max-width: 1440px) {
      font-size: 14px;
    }
  }
`;
