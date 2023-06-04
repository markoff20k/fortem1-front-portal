import React, { useState } from "react";

import { Container } from "./style";

function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  function hendleCod(event) {
    const check = event.target.checked;
    setIsChecked(check);
  }

  return (
    <label class="switch">
      <input type="checkbox" onClick={(event) => hendleCod(event)} />
      <span class="slider round"></span>
    </label>
  );
}

export function Preferences(props) {
  return (
    <Container>
      <h4 style={{color: "var(--primary-text-color)"}} >
        Notificações
      </h4>
      <div className="notifications">
        <span style={{color: "var(--primary-text-color)"}} >
          Comunicação de emissores dos tokens adquiridos
          <Toggle />
        </span>
        <span style={{color: "var(--primary-text-color)"}}>
          Tokens marcados como favoritos
          <Toggle />
        </span>
        <span style={{color: "var(--primary-text-color)"}} >
          Conteúdos da Arena do Conhecimento
          <Toggle />
        </span>
        <span style={{color: "var(--primary-text-color)"}} >
          Novidades da Fortem One
          <Toggle />
        </span>
      </div>
      <h4 style={{color: "var(--primary-text-color)"}} >
        Email
      </h4>
      <div className="email">
        <span style={{color: "var(--primary-text-color)"}} >
          Aceito receber comunicações via email cadastrado na plataforma
          <Toggle />
        </span>
      </div>
      <h4 style={{color: "var(--primary-text-color)"}} >
        Telefone
      </h4>
      <div className="phone">
        <span style={{color: "var(--primary-text-color)"}} >
          Aceito receber comunicações via push e sms do telefone cadastrado na
          plataforma
          <Toggle />
        </span>
      </div>
      <h4 style={{color: "var(--primary-text-color)"}} >
        Configurações
      </h4>
      <div className="config">
        <span style={{color: "var(--primary-text-color)"}} >
          Iniciar sempre com o tema escuro (dark theme)
          <Toggle />
        </span>
        <div className="language">
          <span style={{color: "var(--primary-text-color)"}} >
            Idioma de preferência
          </span>
          <select style={{color: "var(--primary-text-color)"}} >
            <option>Português BR</option>
            <option>Inglês</option>
          </select>
        </div>
      </div>
    </Container>
  );
}
