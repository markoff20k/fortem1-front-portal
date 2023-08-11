import styled from "styled-components";

export const Container2 = styled.div`
  // width: calc(100vw - 300px);
  background-color: #131313;
  // margin-right: 50%;
  // margin-left: 50%;
  justify-content: center;
  position: relative;
  height: 100vh;
  display: flex;

  .dimmer {
    margin-top: -160px;
    
  }

`;

export const Content = styled.div`
  
  right: 0;
  padding: 35px 10px;
  background-color: #131313;
  margin-top: 20px;
  z-index: 1;
  position: absolute;

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
  margin-bottom: 20px;
  gap: 5px;

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
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #f5f5f5;
  background: #16837C !important;
  cursor: pointer;
  padding: 12px !important;
  border: none !important;
  width: fit-content !important;

  @media screen and (max-width: 1260px) {
    font-size: 14px;
    }

`;

export const CardsPatrimony = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const CardsAnnoucement = styled.div`
  width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  
  
`;

export const Carousel = styled.div`
  width: 100%;
  height: 480px;
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
    width: 310px;
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
    // margin-top: 20px;

    p {
      color: var(--primary-text-color);
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      margin-top: 10px;
      margin-bottom: 10px;
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
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      outline: none;
      padding-left: 15px;
      // margin-bottom: 20px;
      

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
      width: 100%;
      border: none !important;
      border-radius: 10px;
      padding: 12px;
      color: var(--primary-text-color);
      // border: 1px solid #009991;
      background-color: var(--button-primary-cta-background-color-disabled);
      cursor: not-allowed;
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
  max-maxWidth: 
  height: 640px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  border-radius: 10px;
  // background-color: var(--header-background-color);
  background-color: transparent;
  // overflow-x: scroll;

  @media screen and (max-width: 1440px) {
    height: 640px;
  }

  .highlights {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      color: var(--primary-text-color);
      margin-left: 20px; 
    }

    button {
      padding: 10px 15px;
      border: none !important;
      border-radius: 10px;
      outline: none;
      background-color: var(--sidebar-item-background-color-hover) !important;
      
      
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
  height: 630px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: var(--header-background-color);
  width: 100%;
  
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
    // width: 70%;
  }
`;

export const Negotiation = styled.div`
  width: 348px;
  height: 630px;
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
  margin-top: 40px;
  margin-bottom: 30px;
  // background-color: var(--header-background-color);
  background: transparent;
  border-radius: 10px;

  .header-knowledge {
    width: 100%;
    // height: 80px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    // border-bottom: 1px solid var(--sidebar-border-color);
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
      border: none !important;
      border-radius: 10px;
      outline: none;
      background: var(--sidebar-item-background-color-hover) !important;
      
    }
  }

  .cards-knowledge{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
`;
