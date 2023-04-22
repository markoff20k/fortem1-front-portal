import React from "react";
import { Container, Content } from "./style";
import imgSuccess from "../../../../assets/succes.svg";

export function SuccessfulIntention(props) {
  return (
    <Container>
      <Content>
        <div className="header-deposit">
          <p style={{ color: "var(--primary-text-color)" }}>
            Depósito rápido
          </p>
          <span onClick={() => props.setFastDeposit(false)} style={{ color: "var(--primary-text-color)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" className="close-icon" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58434 6.99901L0.875873 11.7079L2.29003 13.1221L6.99849 8.41328L11.707 13.1221L13.1211 11.7079L8.41265 6.99901L13.704 1.7072L12.2899 0.292927L6.99849 5.58474L1.70712 0.292932L0.292969 1.7072L5.58434 6.99901Z" fill="var(--primary-text-color)"></path>
              </svg>
          </span>
        </div>
        <div className="qrcode">
          <div className="pix-ted">
            <img src={imgSuccess} alt="sucesso" />
          </div>
          <p
            style={
              
                { color: "var(--primary-text-color)", textAlign: "center", fontSize: 16, marginTop: 20 }
                
            }
          >
            Sua intenção de depósito foi enviada!
            <br />
            Verifique sua caixa de e-mail
          </p>
          <span
            style={
              
                { color: "var(--primary-text-color)", textAlign: "center", fontSize: 13  }
                
            }
          >
            Caso o depósito via Pix já tenha sido efetuado
            <br />
            com sucesso, o valor estará disponível em
            <br />
            até 1 hora na sua carteira
          </span>
        </div>
        <div className="btns">
          <button
            // style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            className="copy"
            onClick={() => props.setFastDeposit(false)} 
          >OK, entendi</button>
        </div>
      </Content>
    </Container>
  );
}
