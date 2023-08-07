import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
position: absolute;
min-height: 100vh;
background-color: #131313;
width: 100%;

padding: 20px;
`;

export const Content = styled.div`
  // // max-width: calc(100vw - 350px);
  // width: 100%;
  display: flex;
  height: 320px;
  flex-direction: column;
  align-items: center;
  // position: absolute;
  
  // top: -60px;
  // left: 325px;
  border-radius: 20px;
  // height: fit-content;
  background-color: var(--header-background-color);
  
  padding: 35px 10px;
    
  // margin-bottom: 130px;
  // height: calc(100vh - 230px);


  @media screen and (max-width: 1440px) {
    // max-width: calc(100vw - 321px);
    top: 105px;
    // left: 277px;
  }

  .header-profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    z-index: 2;
    

    .btn-gerencial {
      width: 92%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      p {
        font-size: 25px;
        margin: 0;

        @media screen and (max-width: 1440px) {
          font-size: 18px;
        }
      }

      button {
        border: none;
        border: 1px solid var(--input-border-color);
        padding: 12px 20px;
        margin: 0 10px;
        border-radius: 12px;
        background-color: var(--input-background-color);

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
        border-radius: 12px;
        background-color: ${(props) => props.theme.primary};
      }
    }
  }
`;


export const ContentInside = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// position: absolute;
// height: 100vh;
// background-color: #131313;
// width: 100%;

  background-color: transparent;
  
  padding: 10px 0px;
  
  border-radius: 20px;
  

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

`;
