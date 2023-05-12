import React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "./style";

export function ChangePassword(props) {
  return (
    <Container>
      <p style={{color: "var(--primary-text-color)"}}>
        <span>Segurança</span> / Alterar senha
      </p>
      <div className="password">
        <h3 style={{color: "var(--primary-text-color)"}}>
          Redefinir senha
        </h3>
        <p style={{color: "var(--primary-text-color)"}}>
          Para atualizar sua senha de acesso à plataforma, digite sua senha
          atual no campo indicado e defina a nova senha desejada. Certifique-se
          de que a nova senha atenda aos requisitos de segurança e lembre-se de
          atualizá-la regularmente para manter sua conta segura.
        </p>
      </div>
      <div className="password-input">
        <div>
          <TextField
            className="input-password"
            // size="small"
            id="outlined-basic"
            label="Senha atual"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            className="input-password"
            // size="small"
            id="outlined-basic"
            label="Nova senha"
            variant="outlined"
          />
        </div>
      </div>
        <div className="password-btn">
          <ul style={{color: "var(--primary-text-color)"}}>
            <li>no mínimo 8 caracteres.</li>
            <li>Pelo menos um número.</li>
            <li>Pelo menos uma letra.</li>
            <li>E um caractere especial: - @_*!%;</li>
          </ul>
          <div>
            <button onClick={() => props.hendleChangePassword()}>Voltar</button>
            <button>Alterar senha</button>
          </div>
        </div>
    </Container>
  );
}
