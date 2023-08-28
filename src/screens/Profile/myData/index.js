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

  const verifiedProfiles = user.profiles.length ? user.profiles.filter(i => i.state === 'verified') : [];
  const lastVerifiedProfile = verifiedProfiles.length && verifiedProfiles[verifiedProfiles.length - 1];
  const metadata = lastVerifiedProfile && JSON.parse(lastVerifiedProfile.metadata)
  
  

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
            {/* <p style={{color: "var(--primary-text-color)", opacity: 0.61}} >
              Último login: {time}
            </p> */}
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
          placeholder="Nome completo"
          value={data.fullname}
          disabled='true'
          //value={lastVerifiedProfile.fullname ? lastVerifiedProfile.fullname : "Nome completo - Complete seu cadastro"}
          
        />
        

        <Input 
          placeholder="Email"

          value={user.email}
          label='Teste'
          disabled='true'
          
          
        />
    </div>
    <div>
      <Input 
          placeholder="Telefone"

          // value="Telefone"
          value={metadata.telefone ? metadata.telefone : "Telefone [Complete seu cadastro]"}
          disabled='true'
          
        />

      <Input 
          placeholder="Data de Nascimento [Complete seu cadastro]"

          // value="Data de nascimento"
          // { user.profiles.length > 0 value=user.profiles[0].dob : value="Data de nascimento"} 
          disabled='true'
          // value={user.profiles[0].dob}
          // {initialStateProfile}
          value={lastVerifiedProfile.dob ? lastVerifiedProfile.dob : "Data de Nascimento [Complete seu cadastro]"}
          
          
          
        />
    </div>
    <div>
      <Input 
          placeholder="CPF"

          value={metadata.cpf ? metadata.cpf : "CPF [Complete seu cadastro]"}
          
          disabled='true'
          
        />

      <Input 
          placeholder="Nacionalidade"

          // value="Nacionalidade"
          value={lastVerifiedProfile.country ? lastVerifiedProfile.country : "Nacionalidade [Complete seu cadastro]"}
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
          placeholder="Endereço"

          // value="Rua e número"
          value={lastVerifiedProfile.address ? lastVerifiedProfile.address : "Endereço [Complete seu cadastro]"}
          disabled='true'
          
        />
                  <Input 
          placeholder="Bairro"

          value="Bairro"
          disabled='true'
          
        />

        </div>
        <div>

        <Input 
          placeholder="Cidade"

          // value="Cidade / Estado"
          value={lastVerifiedProfile.city ? lastVerifiedProfile.city  : "Cidade / Estado [Complete seu cadastro]"}
          disabled='true'
          
        />
          <Input 
          placeholder="CEP"

          // value="País"
          value={lastVerifiedProfile.postcode ? lastVerifiedProfile.postcode : "CEP [Complete seu cadastro]"}
          disabled='true'
          
          
        />

        </div>
      </PersonalData>
      <Buttons>
        <button>Completar cadastro</button>
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
