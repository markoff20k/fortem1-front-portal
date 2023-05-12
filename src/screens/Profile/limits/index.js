import React, { useState } from "react";

import { Container } from "./style";
import imgSelected from "../../../assets/selected.svg";

export function Limits() {
  const [isSelected, setIsSelected] = useState("beginner");

  return (
    <Container>
      <div className="div-header-limits">
        <h4 style={{color: "var(--primary-text-color)"}}>
          Limites de operações
        </h4>
        <p style={{color: "var(--primary-text-color)"}}>
          Valide seus dados pessoais e documentos para liberar novas
          funcionalidades. Análise em até 24 horas.
        </p>
      </div>
      <div className="div-cards-limits">
        <div
          className={
            isSelected === "beginner"
              ? "card-limit-01 active-border"
              : "card-limit-01"
          }
        >
          <div
            style={{color: "var(--primary-text-color)"}}
            className={
              isSelected === "beginner" ? "header active-card" : "header"
            }
          >
            {isSelected === "beginner" && <img src={imgSelected} alt="" />}
            Iniciante
          </div>
          {isSelected === "beginner" && (
            <span
              className="limits-current"
              style={{color: "var(--primary-text-color)"}}
            >
              Limite atual
            </span>
          )}
          <div className="validation">
            <h5 style={{color: "var(--primary-text-color)"}}>
              Validações:
            </h5>
            <ul>
              <li
                style={{color: "var(--primary-text-color)"}}
              >
                Dados pessoais
              </li>
            </ul>
          </div>
          <div className="functionalities">
            <h5 style={{color: "var(--primary-text-color)"}}>
              Funcionalidades:
            </h5>
            <ul>
              <li
                style={{color: "var(--primary-text-color)"}}
              >
                Negociação de criptoativos
              </li>
              <li
                style={{color: "var(--primary-text-color)"}}
              >
                Depósitos
              </li>
              <li
                style={{color: "var(--primary-text-color)"}}
              >
                Saque de dinheiro (até
                <br />
                R$ 5.000,00 por mês)
              </li>
            </ul>
          </div>
          <div className="available-limits">
            <h5 style={{color: "var(--primary-text-color)"}}>
              Limite disponivel:
            </h5>
            <h4 style={{color: "var(--primary-text-color)"}}>
              R$ 50.000,00
            </h4>
            <span
              style={{color: "var(--primary-text-color)"}}
            >
              depósito por mês
            </span>
          </div>
        </div>
        <div
          className={
            isSelected === "intermediary"
              ? "card-limit-02 active-border"
              : "card-limit-02"
          }
        >
          <div
            style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            className={
              isSelected === "intermediary" ? "header active-card" : "header"
            }
          >
            {isSelected === "intermediary" && <img src={imgSelected} alt="" />}
            Intermediarío
          </div>
          {isSelected === "intermediary" && (
            <span
              className="limits-current"
              style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            >
              Limite atual
            </span>
          )}
          <div className="validation">
            <h5 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
              Validações:
            </h5>
            <ul>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Reconhecimento facial
              </li>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Documento com foto:
              </li>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                CNH, RG ou passaport
              </li>
            </ul>
          </div>
          <div className="functionalities">
            <h5 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
              Funcionalidades:
            </h5>
            <ul>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Negociação de criptoativos
              </li>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Depósitos
              </li>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Saques
              </li>
            </ul>
          </div>
          <div className="available-limits">
            <h5 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
              Limite disponivel:
            </h5>
            <h4 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
              R$ 100.000,00
            </h4>
            <span
              style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            >
              depósito por mês
            </span>
          </div>
          <button>Verificar agora</button>
        </div>
        <div
          className={
            isSelected === "advanced"
              ? "card-limit-03 active-border"
              : "card-limit-03"
          }
        >
          <div
            style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            className={
              isSelected === "advanced" ? "header active-card" : "header"
            }
          >
            {isSelected === "advanced" && <img src={imgSelected} alt="" />}
            Avançado
          </div>
          {isSelected === "advanced" && (
            <span
              className="limits-current"
              style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            >
              Limite atual
            </span>
          )}
          <div className="validation">
            <h5 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
              Validações:
            </h5>
            <ul>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Extrato bancário
              </li>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Recibo e Declaração completa
                <br />
                do imposto de rebnda
              </li>
            </ul>
          </div>
          <div className="functionalities">
            <h5 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
              Funcionalidades:
            </h5>
            <ul>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Negociação de criptoativos
              </li>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Depósitos
              </li>
              <li
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                Saques
              </li>
            </ul>
          </div>
          <div className="available-limits">
            <h5 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
              Limite disponivel:
            </h5>
            <h4 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
              R$ 200.000,00
            </h4>
            <span
              style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            >
              depósito por mês
            </span>
          </div>
          <button disabled>Verificar agora</button>
        </div>
      </div>
    </Container>
  );
}
