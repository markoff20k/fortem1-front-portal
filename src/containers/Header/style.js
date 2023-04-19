import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 100vw;
  width: calc(100% - 119px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin-left: 119px;
  padding-left: 50px;
  background-color: ${(props) => props.theme.backgroundCards};
  z-index: 9999;

  @media screen and (max-width: 1440px) {
    width: calc(100% - 100px);
    margin-left: 100px;
    height: 80px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px 10px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.backgroundTertiary};

  input {
    width: 300px;
    height: 50px;
    border: none;
    outline: none;
    background-color: transparent;
    padding-left: 15px;
    color: ${(props) => props.theme.search};

    &::-webkit-input-placeholder {
      color: ${(props) => props.theme.search};
      background-color: transparent;
      font-family: "Inter", sans-serif;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 40px;
  color: var(--sidebar-text-color);

  a {
    padding: 20px;
    margin: 10px;
    background-color: var(--sidebar-item-background-color-hover) !important;
    border-radius: 20px;
    cursor: pointer;

    @media screen and (max-width: 1440px) {
      padding: 15px;
      margin: 5px;
    }
  }
`;

export const ButtonLight = styled.button`
  padding: 20px 30px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;

  @media screen and (max-width: 1440px) {
    padding: 15px 20px;
    margin-left: 10px;
  }
`;

export const ButtonDark = styled.button`
  border-radius: 10px !important;
  border: none;
  font-size: 18px;
  color: var(--sidebar-text-color);
  background-color: transparent !important;
  background-size: cover;
  cursor: pointer;
  padding: 15px 20px;
  margin-left: 10px;

  @media screen and (max-width: 1440px) {
    padding: 15px 20px;
    margin-left: 10px;
  }
`;

export const Li = styled(Link)``;
