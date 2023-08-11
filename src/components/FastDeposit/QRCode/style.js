import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  
  max-width: 380px;
  width: 60%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-pack: center;
  margin-top: 380px;
  // background-color: rgba(204, 204, 204, 0.4);
  
  z-index: 1000000;

  .dimmer-auth {
    top: 0 !important;
    
  }
`
export const Content = styled.div`
  max-width: 380px;
  width: 100vw;
  height: 535px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  background-color: var(--header-background-color);
  position: fixed;
  top: 180px;

  .header-deposit{
    width: 100%;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--sidebar-border-color);
    padding: 0 20px;

    p{
      margin: 0;
      font-family: 'Inter';
      font-size: 20px;
      font-weight: 700;
      line-height: normal;
    }

    span{
      font-size: 25px;
      cursor: pointer;
    }
  }

  .qrcode{
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .pix-ted{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .pix,
      .ted{
        width: 69px;
        height: 40px;
        border-radius: 12px;
        border: none;
        margin: 5px;
        background-color: var(--sidebar-item-background-color-hover);
      }
    }
  }

  .btns{
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .copy{
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 12px;
      border: none;
      color: var(--primary-text-color);
      
      

      img{
        margin-right: 5px;
      }
    }

    .deposit{
      width: 90%;
      padding: 10px;
      border-radius: 12px;
      border: 1px solid var(--tab-panel-border-color-active);
      color: var(--primary-text-color);
      background-color: transparent;
    }
  }
`