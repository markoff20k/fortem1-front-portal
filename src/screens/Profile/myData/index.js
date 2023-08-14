import React from "react";
import {
  Container,
  MyData,
  PersonalData,
  Buttons,
  Terms,
} from "./style";
import avatar from "../../../assets/avatar.svg";
import avatarCamera from "../../../assets/Avatar-camera.svg";
import avatarIcon from "../../../assets/Icon.svg";
import imgDownload from "../../../assets/download.svg";
//import TextField from '@mui/material/TextField';

import { useSelector } from 'react-redux';

import { UserOutlined } from '@ant-design/icons';

import { Input } from 'antd';
// import { User } from "@openware/react-opendax";

import { selectUserInfo } from "src/modules";



export function Mydata() {

  const user = useSelector(selectUserInfo);
  const data = user.data && JSON.parse(user.data);
  

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
              {data.fullname}
            </p>
            <p style={{color: "var(--primary-text-color)"}} >
              {user.email}
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

        <Input 
          placeholder="default size"
          value={data.fullname}
          disabled='true'
          
        />
        

        <Input 
          placeholder="default size"

          value={user.email}
          label='Teste'
          disabled='true'
          
        />
    </div>
    <div>
      <Input 
          placeholder="default size"

          value="Telefone"
          disabled='true'
          
        />

      <Input 
          placeholder="default size"

          value="Data de nascimento"
          disabled='true'
          
        />
    </div>
    <div>
      <Input 
          placeholder="default size"

          value="Documento"
          disabled='true'
          
        />

      <Input 
          placeholder="default size"

          value="Nacionalidade"
          disabled='true'
          
        />

    </div>
  </PersonalData>
  <PersonalData>
        <h3 style={{color: "var(--primary-text-color)"}} >
          Endereço
        </h3>
        <div>
        
          <Input 
          placeholder="default size"

          value="Rua e número"
          disabled='true'
          
        />
                  <Input 
          placeholder="default size"

          value="Bairro"
          disabled='true'
          
        />

        </div>
        <div>

        <Input 
          placeholder="default size"

          value="Cidade / Estado"
          disabled='true'
          
        />
          <Input 
          placeholder="default size"

          value="País"
          disabled='true'
          
          
        />

        </div>
      </PersonalData>
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
