import styled from "styled-components";

export const Container = styled.div`
  width: 89%;
  height: calc(100vh - 280px);
  margin-top: 30px;

  @media screen and (max-width: 1440px) {
    // height: calc(100vh - 20px);
    // margin-bottom: 10px;
  }

  h4 {
    @media screen and (max-width: 1440px) {
      font-size: 18px;
      margin-top: 20px;
    }
  }

  .notifications,
  .email,
  .phone,
  .config {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 30px;

    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;

      @media screen and (max-width: 1440px) {
        font-size: 13px;
      }
    }
  }

  .language {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      width: 200px;
      height: 45px;
      border: none;
      border-radius: 10px;
      padding: 0 10px;
      background-color: ${(props) => props.theme.backgroundTertiary};
    }
  }
`;
