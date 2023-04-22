import React, { useState } from "react";
import { Container, Content } from "./style";
import imgQRCode from "../../../assets/QR_Code.svg";
import imgCopy from "../../../assets/copy-icon.svg";
import imgCopyed from "../../../assets/copyed-icon.svg";
import { SuccessfulIntention } from "./SuccessfulIntention";


export function QRCode(props) {
  const [copyed, setCopyed] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  return (
    <Container>
      <Content>
        <div className="header-deposit">
          <p style={{ color: "#fff" }}>
            Depósito rápido
          </p>
          <span
            onClick={() => {
              props.setFastDeposit(false);
              setCopyed(false);
            }}
            style={{ color: "var(--primary-text-color)" }}
          >
              <svg width="14" height="14" viewBox="0 0 14 14" className="close-icon" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58434 6.99901L0.875873 11.7079L2.29003 13.1221L6.99849 8.41328L11.707 13.1221L13.1211 11.7079L8.41265 6.99901L13.704 1.7072L12.2899 0.292927L6.99849 5.58474L1.70712 0.292932L0.292969 1.7072L5.58434 6.99901Z" fill="var(--primary-text-color)"></path>
              </svg>
          </span>
        </div>
        <div className="qrcode">
          <div className="pix-ted">
            <button
              style={{ color: "var(--primary-text-color)" }}
              className="pix"
            >
              PIX
            </button>
            <button
              style={{ color: "var(--primary-text-color)" }}
              className="ted"
            >
              TED
            </button>
          </div>
          <span style={{ color: "var(--primary-text-color)" }}>
            Valor para depósito: R$ 3.000,00
          </span>
          <img src={imgQRCode} alt="" />
        </div>
        <div className="btns">
          <button
            // style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            className="copy"
            onClick={() => setCopyed(true)}
          >
            <img src={!copyed ? imgCopy : imgCopyed} alt="" />
            {!copyed ? "Copiar chave Pix" : "Chave Pix copiada"}
          </button>
          <button
            // style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            className="deposit"
            onClick={() => {
              setCopyed(false);
              setSuccess(true);
            }}
          >
            Já realizei o depósito
          </button>
        </div>
      </Content>
      {isSuccess && (
        <SuccessfulIntention
          setFastDeposit={props.setFastDeposit}
        />
      )}
    </Container>
  );
}
