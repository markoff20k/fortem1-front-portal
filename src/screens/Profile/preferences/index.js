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
      <h4 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
        Notificações
      </h4>
      <div className="notifications">
        <span style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
          Comunicação de emissores dos tokens adquiridos
          <Toggle />
        </span>
        <span style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
          Tokens marcados como favoritos
          <Toggle />
        </span>
        <span style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
          Conteúdos da Arena do Conhecimento
          <Toggle />
        </span>
        <span style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
          Novidades da Fortem One
          <Toggle />
        </span>
      </div>
      <h4 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
        Email
      </h4>
      <div className="email">
        <span style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
          Aceito receber comunicações via email cadastrado na plataforma
          <Toggle />
        </span>
      </div>
      <h4 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
        Telefone
      </h4>
      <div className="phone">
        <span style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
          Aceito receber comunicações via push e sms do telefone cadastrado na
          plataforma
          <Toggle />
        </span>
      </div>
      <h4 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
        Configurações
      </h4>
      <div className="config">
        <span style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
          Iniciar sempre com o tema escuro (dark theme)
          <Toggle />
        </span>
        <div className="language">
          <span style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
            Idioma de preferência
          </span>
          <select style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
            <option>Português BR</option>
            <option>Inglês</option>
          </select>
        </div>
      </div>
    </Container>
  );
}
