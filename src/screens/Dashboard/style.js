import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  background-color: black;
  right: 0;
  left: 300px;
`;

export const Content = styled.div`
  width: calc(100% - 296px);
  position: absolute;
  right: 0;
  padding: 35px 10px;
  background-color: black;

  @media screen and (max-width: 1440px) {
    width: calc(100% - 296px);
    padding: 10px 30px;
  }
`;

export const Alert = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: var(--main-background-color);

  .description {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
      margin-left: 30px;
      line-height: 23px;
      color: var(--primary-text-color);

      @media screen and (max-width: 1440px) {
        font-size: 14px;
        line-height: 21px;
        margin-top: 15px;
      }
    }
  }
`;

export const Button = styled.button`
  padding: 18px 25px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
`;

export const CardsPatrimony = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const Carousel = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  margin-top: 30px;
`;

export const Slid = styled.div`
  flex: 1;
  margin-right: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundCards};

  @media screen and (max-width: 1440px) {
    width: 70%;
  }
`;

export const SlidTokens = styled.div`
  flex: 1;
  width: 100%;
  flex-wrap: nowrap;
  margin-right: 20px;
  border-radius: 10px;
  display: -webkit-inline-box;
  overflow-x: auto;
  direction: ltr;

  &::-webkit-scrollbar {
    position: absolute;
    /* background-color: #333; */
    top: 0;
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

export const Deposit = styled.div`
  width: 370px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: var(--main-background-color);
  color: var(--primary-text-color);

  @media screen and (max-width: 1440px) {
    width: 310px;
  }

  .header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--divide-color-level-2);

    p {
      font-size: 20px;
      margin-top: 20px;
      color: var(--primary-text-color);
    }
  }
  .input {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p {
      margin-top: 20px;
      margin-left: 20px;
      align-self: flex-start;
    }

    span {
      font-size: 12px;
      margin-left: 20px;
      align-self: flex-start;
    }

    input {
      width: 90%;
      height: 50px;
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.search};
      outline: none;
      color: ${(props) => props.theme.search};
      background-color: ${(props) => props.theme.backgroundCards};
      padding-left: 15px;

      &::-webkit-input-placeholder {
        color: ${(props) => props.theme.search};
        background-color: transparent;
        font-family: "Inter", sans-serif;
      }
    }
  }
  .buttons {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .btn-ajuste {
      width: 90%;
      border: none;
      border-radius: 10px;
      padding: 12px;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.primary};
    }

    .btn-ver {
      width: 90%;
      border: 1px solid ${(props) => props.theme.primary};
      border-radius: 10px;
      padding: 12px;
      margin-bottom: 20px;
      color: ${(props) => props.theme.primary};
      background-color: transparent;
    }
  }
`;

export const Tokens = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;

  @media screen and (max-width: 1440px) {
    height: 640px;
  }

  .highlights {
    width: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 10px;
      outline: none;
      background-color: ${(props) => props.theme.backgroundCards};
    }
  }
`;

export const Criptos = styled.div`
  width: 100%;
  /* height: 420px; */
  display: flex;
  margin-top: 30px;
`;

export const Tables = styled.div`
  flex: 1;
  margin-right: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundCards};

  @media screen and (max-width: 1440px) {
    width: 70%;
  }
`;

export const Negotiation = styled.div`
  width: 370px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundCards};

  @media screen and (max-width: 1440px) {
    width: 310px;
  }
`;

export const Knowledge = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;

  .header-knowledge {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 25px;
    }

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 10px;
      outline: none;
      background-color: ${(props) => props.theme.backgroundCards};
    }
  }

  .cards-knowledge{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
