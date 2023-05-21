import React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "./style";
import imgQRCode from "../../../../assets/QR_Code.svg";
import imgColour from "../../../../assets/Colour.svg";

import { ProfileAuthDetails } from "src/containers";

export function IsAuthentication(props) {
  return (
    <Container>
      <p style={{color: "var(--primary-text-color)"}}>
        <span>Segurança</span> / Autenticação em duas etapas (2FA)
      </p>
      <div className="autentication">
        <h3 style={{color: "var(--primary-text-color)"}} >
          Autenticação em duas etapas (2FA)
        </h3>
        <p style={{color: "var(--primary-text-color)"}} >
          São três passos simples para habilite a autenticação de dois fatores
          com o Google Authenticator e protejer ainda mais suas transações
          financeiras.
        </p>
      </div>
      <ol>
        <li style={{color: "var(--primary-text-color)"}} >
          Baixe gratuitamente e instale no seu celular o aplicativo Google
          Authenticator disponível na <span>App Store</span> ou{" "}
          <span>Google Play</span>.
        </li>
        <li style={{color: "var(--primary-text-color)"}}>
          Crie uma nova conta, digitalize o QR code ou digite o CÓDIGO MFA.
        </li>
        <div className="mfa">
          <img src={imgQRCode} alt="" />
          <div>
            <span
              style={{color: "var(--primary-text-color)"}}
            >
              Código MFA
            </span>
            <p style={{color: "var(--primary-text-color)"}}>
              GT5DHWWQ7QYYGPDY2GMHJYVN2LSLGHKX
              <img src={imgColour} alt="" />
            </p>
          </div>
        </div>
        <li style={{color: "var(--primary-text-color)"}}>
          Insira seu código de autenticação de 6 dígitos do aplicativo Google
          Authenticator no campo abaixo.
        </li>

        <div className="autentication-input">
          <TextField
            className="input-password"
            // size="small"
            id="outlined-basic"
            variant="outlined"
            placeholder="-"
          />
          <span style={{color: "var(--primary-text-color)"}}>
            ..
          </span>
          <TextField
            className="input-password"
            // size="small"
            id="outlined-basic"
            placeholder="-"
            variant="outlined"
          />
          <span style={{color: "var(--primary-text-color)"}}>
            ..
          </span>
          <TextField
            className="input-password"
            // size="small"
            id="outlined-basic"
            placeholder="-"
            variant="outlined"
          />
          <span style={{color: "var(--primary-text-color)"}}>
            ..
          </span>
          <TextField
            className="input-password"
            // size="small"
            id="outlined-basic"
            placeholder="-"
            variant="outlined"
          />
          <span style={{color: "var(--primary-text-color)"}}>
            ..
          </span>
          <TextField
            className="input-password"
            // size="small"
            id="outlined-basic"
            placeholder="-"
            variant="outlined"
          />
          <span style={{color: "var(--primary-text-color)"}} >
            ..
          </span>
          <TextField
            className="input-password"
            // size="small"
            id="outlined-basic"
            placeholder="-"
            variant="outlined"
          />
          <button>Confirmar autenticação</button>
        </div>
      </ol>
    </Container>
  );
}
