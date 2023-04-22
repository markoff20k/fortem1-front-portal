import styled from "styled-components";

export const Container = styled.div`
  // width: calc(100vw - 300px);
  background-color: var(--header-background-color);
  // margin-right: 50%;
  // margin-left: 50%;
  display: flex;
  justify-content: center;
  position: relative;

  .dimmer {
    margin-top: -160px;
    
  }

`;

export const Content = styled.div`
  
  right: 0;
  padding: 35px 10px;
  background-color: var(--header-background-color);

  @media screen and (max-width: 1440px) {
  
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
  background-color: var(--header-background-color);

  .description {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 80%;

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      margin-left: 30px;
      color: var(--primary-text-color);

      @media screen and (max-width: 1440px) {
        font-size: 14px;
        line-height: 18px;
        margin-top: 15px;
      }
    }
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: var(--button-primary-cta-text-color);
  background: var(--button-primary-cta-background-color);
  cursor: pointer;
  padding: 12px 22px;
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
  background-color: var(--header-background-color);
  
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
  width: 348px;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-radius: 10px;
  background-color: var(--header-background-color);
  color: var(--primary-text-color);
  padding: 10px 20px;

  @media screen and (max-width: 1440px) {
    width: 310px;
  }

  .header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid var(--sidebar-border-color);

    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      color: var(--primary-text-color);
      
    }
  }
  .input-group {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;


    p {
      color: var(--primary-text-color);
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      margin-top: 20px;
      align-self: flex-start;
    }

    span {
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      align-self: flex-start;
    }

    input {
      border: 1px solid var(--input-border-color);
      -webkit-box-shadow: 0 0 0 1000px var(--input-background-color) inset;
      background-color: var(--input-background-color);
      color: var(--input-text-color);
      width: 100%;
      height: 50px;
      border-radius: 10px;
      outline: none;
      padding-left: 15px;
      

      &::-webkit-input-placeholder {
        color: var(--input-text-color);
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
      color: var(--primary-text-color);
      border: 1px solid #009991;
    }

    .btn-ver {
      width: 90%;
      border: 1px solid #009991;
      border-radius: 10px;
      padding: 12px;
      margin-bottom: 20px;
      color: #009991;
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
  background-color: var(--header-background-color);
  
  h4 {
    color: var(--primary-text-color);
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 20px;
    margin-left: 20px;
    align-self: flex-start;
  }

  @media screen and (max-width: 1440px) {
    width: 70%;
  }
`;

export const Negotiation = styled.div`
  width: 348px;
  height: 610px;
  border-radius: 10px;
  background-color: var(--header-background-color);

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
  background-color: var(--header-background-color);
  border-radius: 10px;

  .header-knowledge {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid var(--sidebar-border-color);
    padding-left: 20px;
    padding-right: 20px;

    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      color: var(--primary-text-color);
      
    }

    button {
      color: var(--primary-text-color);
      padding: 10px 15px;
      border: none;
      border-radius: 10px;
      outline: none;
      
    }
  }

  .cards-knowledge{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
