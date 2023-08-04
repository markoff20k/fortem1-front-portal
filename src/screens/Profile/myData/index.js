import React from "react";
import {
  Container,
  MyData,
  PersonalData,
  Address,
  Buttons,
  Terms,
} from "./style";
import avatar from "../../../assets/avatar.svg";
import avatarCamera from "../../../assets/Avatar-camera.svg";
import avatarIcon from "../../../assets/Icon.svg";
import imgDownload from "../../../assets/download.svg";
import TextField from '@mui/material/TextField';

export function Mydata() {
  return (
    <Container>
      <MyData>
        <div>
          <img src={avatar} alt="" />
          <button>
            <img src={avatarCamera} alt="" />
            <img className="icon-camera" src={avatarIcon} alt="" />
          </button>
          <div className="my-data-description">
            <p style={{color: "var(--primary-text-color)"}} >
              Rodrigo Fontoura
            </p>
            <p style={{color: "var(--primary-text-color)"}} >
              digo.fontoura@gmail.com
            </p>
          </div>
        </div>
        <button className="sair">Sair da conta</button>
      </MyData>
      <PersonalData>
        <h3 style={{color: "var(--primary-text-color)"}} >
          Dados pessoais
        </h3>
        <div>
          {/* <TextField
            className="input-profile"
            // size="small"
            id="outlined-basic"
            label="Nome completo"
            variant="outlined"
          />
          <TextField
            // size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            // size="small"
            id="outlined-basic"
            label="Telefone"
            variant="outlined"
          /> */}
        </div>
        <div>
          {/* <TextField
            // size="small"
            id="outlined-basic"
            label="Data de nascimento"
            variant="outlined"
          /> */}

{/* <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        /> */}

          {/* <TextField
            // size="small"
            id="outlined-basic"
            label="Documento"
            variant="outlined"
          /> */}
          {/* <TextField
            // size="small"
            id="outlined-basic"
            label="Nacionalidade"
            variant="outlined"
          /> */}
        </div>
      </PersonalData>
      <Address>
        <h3 style={{color: "var(--primary-text-color)"}} >
          Endereço
        </h3>
        <div>
          {/* <TextField
            className="input-postal"
            // size="small"
            id="outlined-basic"
            label="Código Postal"
            variant="outlined"
          />
          <TextField
            // size="small"
            id="outlined-basic"
            label="Rua e número"
            variant="outlined"
          /> */}
        </div>
        <div>
          {/* <TextField
            // size="small"
            id="outlined-basic"
            label="Bairro"
            variant="outlined"
          />
          <TextField
            // size="small"
            id="outlined-basic"
            label="Cidade / Estado"
            variant="outlined"
          />
          <TextField
            // size="small"
            id="outlined-basic"
            label="País"
            variant="outlined"
          /> */}
        </div>
      </Address>
      <Buttons>
        <button>Atualizar cadastro</button>
      </Buttons>
      <Terms>
        <button style={{color: "var(--primary-text-color)"}} >
          Termos de uso
          <img src={imgDownload} alt="" />
        </button>
        <button style={{color: "var(--primary-text-color)"}} >
          Política de privacidade
          <img src={imgDownload} alt="" />
        </button>
      </Terms>
    </Container>
  );
}
