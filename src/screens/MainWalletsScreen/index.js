import React from "react";
import Table from "react-bootstrap/Table";
import { Container, Content, Graphic, Report } from "./style";
import imgBTC from "../../assets/BTC.svg";
import imgLogoIcon from "../../assets/logo-icon-dark.svg";

import { WalletsScreen } from "../WalletsScreen";

export function Wallet(props) {
  return (
    <Container>
      <Content
        // style={
        //   !props.isOpened ? { width: "calc(100vw - 130px)", left: 110 } : {}
        // }
      >
        <Graphic>
          <div className="patrimony">
            <div className="patrimony-total">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Patrimônio total
              </p>
              <h4
                style={{ color: "var(--primary-text-color)" }}
              >
                R$ 15.840,00
              </h4>
              <span>+ 13,87%</span>
            </div>
            <div className="patrimony-available">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Disponível em fiat
              </p>
              <h4
                style={{ color: "var(--primary-text-color)" }}
              >
                R$ 5.000.000,00
              </h4>
              <div className="btn-deposit">
                <button>Depositar</button>
                <button>Sacar</button>
              </div>
            </div>
          </div>
          <div className="patrimony-graphic">
            <div className="patrimony-graphic-top">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Total em ativos
              </p>
              <select
                style={{ color: "var(--primary-text-color)" }}
              >
                <option>Visão gear</option>
              </select>
            </div>
            <div className="patrimony-graphic-bottom">
              {/* <img src={imgGrafic} alt="" /> */}
              <div className="grafic">
                <h5
                    style={{ color: "var(--primary-text-color)" }}
                >
                  <span>Investido</span>
                  <br />
                  R$ 10.840.000,00
                </h5>
              </div>
              <div className="ativos">
                <p
                  style={{ color: "var(--primary-text-color)" }} >
                  <div></div>
                  <strong>Criptomoedas</strong>
                  <br />
                  R$ 10.000.000,00
                </p>
                <p
                  style={{ color: "var(--primary-text-color)" }}
                >
                  <div></div>
                  <strong>Tokens</strong>
                  <br />
                  R$ 840.000,00
                </p>
              </div>
            </div>
          </div>
        </Graphic>
        <Report>
          {/* <div className="reports">
            <p style={{ color: "var(--primary-text-color)" }} >
              Meus ativos
            </p>
            <div>
              <select
                style={{ color: "var(--primary-text-color)" }}
              >
                <option
                  style={{ color: "var(--primary-text-color)" }}
                >
                  Selecionar um ativo
                </option>
              </select>
              <button
                style={{ color: "var(--primary-text-color)" }}
              >
                Todos
              </button>
              <button
                style={{ color: "var(--primary-text-color)" }}
              >
                Criptomoedas
              </button>
              <button
                style={{ color: "var(--primary-text-color)" }}
              >
                Tokens
              </button>
            </div>
          </div>
          <div className="reports-table">
            <Table>
              <thead>
                <tr>
                  <th
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    Nome do ativo
                  </th>
                  <th
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    Quantidade
                  </th>
                  <th
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    Valor
                  </th>
                  <th
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    Ação
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="td"
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    <img style={{ marginRight: 20 }} src={imgBTC} alt="" />
                    Bitcoin BTC
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    0,43085
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", bordeer: "none" }}
                  >
                    ≈ R$ 10.000.000,00
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    <button className="btn-negociar">Negociar</button>
                  </td>
                </tr>
                <tr>
                  <td
                    className="td"
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    <img
                      className="img-especial"
                      style={{ marginRight: 20, width: 25 }}
                      src={imgLogoIcon}
                      alt=""
                    />
                    Token $BTO
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)" }}
                  >
                    2
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    ≈ R$ 840.000,00
                  </td>
                  <td
                    style={{ color: "var(--primary-text-color)", border: "none" }}
                  >
                    <button className="btn-negociar">Negociar</button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div
              className="pagination"
              style={{ color: "var(--primary-text-color)" }}
            >
              Página
              <span
                style={{ color: "var(--primary-text-color)" }}
              >
                1
              </span>{" "}
              de 10
              <button>{"<"}</button>
              <button>{">"}</button>
            </div>
          </div> */}
          
        </Report>
        {/* <WalletsScreen /> */}
      </Content>
    </Container>
  );
}
