import React from "react";

import { useParams } from 'react-router';

import {
  InsideContainer,
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
import { TextField } from "@mui/material";

import garantia from './Shield Done.svg';

import { selectSaleItem } from 'src/modules/sale/sale-item';

import { selectUserInfo } from 'src/modules';
import { findSalebyId } from 'src/modules/sale/sale-item';


import { SaleDetailScreen } from "src/plugins/Sale";

export function Mydata() {
  return (
    <InsideContainer>

      <div className="pg-token-project-info">

        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <div className="pg-token-project-info__general">
          <h4> Direitos e informações do token </h4>
          <p> Babitur non nibh id enim finibus finibus ac quis elit. Morbi semper massa laoreet elit finibus, in maximus odio commodo.</p>
          <p> Sed varius volutpat nulla, quis consequat massa maximus eget. Duis maximus dictum purus, convallis molestie lorem ullamcorper at.</p>
          <br/>
          <p style={{fontWeight: '600', opacity: '1'}}> Informações do token </p>
          <p style={{fontWeight: '400', fontSize: '12px', marginTop: '5px'}}> Tipo: Recebíveis | Blockchain: Ethereum </p>

        </div>

        <div className="pg-token-project-info__general">
        <h4> Cronograma de recebimento </h4>
          <p> O montante integral dos recebíveis será distribuído aos titulares dos tokens. O valor que você receberá será proporcional à quantidade de tokens que adquiriu, conforme estabelecido no calendário de pagamentos previsto. </p>
          <br/>
          <br/>
          <br/>
          <p> Vencimento do token e conclusão dos pagamentos: 16/04/2024 </p>

        </div>
        </div>

        <div className="pg-token-project-info__buy">
          
          
          <SaleDetailScreen/>
        </div>

        

        
      </div>
      

        
      <div className="pg-token-project-info2">

        <div className="pg-token-project-info__general">
          <h4> Cronograma de recebimento </h4>
          <p> O montante integral dos recebíveis será distribuído aos titulares dos tokens. O valor que você receberá será proporcional à quantidade de tokens que adquiriu, conforme estabelecido no calendário de pagamentos previsto. </p>
          <br/>
          <br/>
          <br/>
          <p> Vencimento do token e conclusão dos pagamentos: 16/04/2024 </p>
        </div>
 
        <div className="pg-token-project-info__colateral">
          <div style={{display: 'flex', flexDirection: 'row', lineHeight:'56px', color: 'var(--primary-text-color)'}}> <img src={garantia} /><h4> Garantias </h4> </div>
            
        </div>

        
        </div>

      <div className="pg-token-project-sim">
        <div className="pg-token-project-sim__calc">
          <h4> Faça uma simulação </h4>
          <br/>
          <p> Valor da compra </p>
        
          <input style={{borderColor: 'rgba(255, 255, 255, 0.03)'}}></input>

          <br/>

          <div class="slidecontainer">
            <input type="range" min="1" max="10000" value="20" class="slider" id="myRange" />
            <p style={{opacity: '0.61', fontSize: '12px', fontWeigh: '400', lineHeight: '20px', marginTop: '10px'}}> Quantidade de tokens: xxxx </p>
          </div>

          

        </div>
        
        <div className="pg-token-project-sim__result">
          <p style={{fontSize: '18px', marginBottom: '20px'}}> Receba em 1x até 16/04/2024 </p>
          <h4> R$ 32.000,00 </h4>
          <p style={{fontSize: '12px', opacity: '0.61', marginTop: '5px',}}> Valor estimado a receber até a conclusão dos pagamentos </p>
          <p style={{color: '#11ECC7', fontSize: '20px', marginTop: '20px', fontWeight: '600'}}> Lucro: R$ 7.000,00 </p>

        </div>
      </div>

    </InsideContainer>
  );
}
