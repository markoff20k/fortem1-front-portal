import React, { useState } from "react";
import { IsAuthentication } from "./authentication";
import { ChangePassword } from "./changePassword";

import { Container, Password, Authentication, Activities } from "./style";

import { ProfileAccountActivity } from "src/containers";

export function Security(props) {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isAuthentication, setIsAuthentication] = useState(false);

  function hendleChangePassword() {
    setIsChangePassword(!isChangePassword);
    setIsAuthentication(false);
  }

  function hendleIsAuthentication() {
    setIsAuthentication(!isAuthentication);
    setIsChangePassword(false);
  }

  return (
    <Container>
      {!isChangePassword && !isAuthentication && (
        <>
          <Password>
            <div>
              <h4
                style={{color: 'var(--primary-text-color)'}}
              >
                Alterar senha
              </h4>
              <p
                style={{color: 'var(--primary-text-color)'}}
              >
                A segurança dos seus dados é muito importante para nós. Por
                isso, recomendamos
                <br />
                que você altere sua senha a cada 3 meses para evitar possíveis
                invasões ou
                <br />
                acessos não autorizados à sua conta.
              </p>
            </div>
            <button
              onClick={() => hendleChangePassword()}
            >
              Alterar senha
            </button>
          </Password>
          <Authentication>
            <div>
              <h4
                style={{color: 'var(--primary-text-color)'}}
              >
                Autenticação em duas etapas (2FA)
              </h4>
              <p
                style={{color: 'var(--primary-text-color)'}}
              >
                Habilite a autenticação de dois fatores com o Google
                Authenticator e proteja ainda
                <br /> mais suas transações financeiras.
              </p>
            </div>
            <button
              onClick={() => hendleIsAuthentication()}
            >
              Habilitar agora
            </button>
          </Authentication>
          <ProfileAccountActivity />
          {/* <Activities>
            <h4 style={{color: 'var(--primary-text-color)'}}
            >
              Últimas atividades na conta
            </h4>
            <div>
              
            </div>
            <div
              className="pagination"
              style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
            >
              Página
              <span
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              >
                1
              </span>{" "}
              de 10
              <button
              >
                {"<"}
              </button>
              <button
              >
                {">"}
              </button>
            </div>
          </Activities> */}
        </>
      )}
      {isChangePassword && (
        <ChangePassword
          hendleChangePassword={hendleChangePassword}
          themeDark={props.themeDark}
        />
      )}
      {isAuthentication && <IsAuthentication themeDark={props.themeDark} />}
    </Container>
  );
}
