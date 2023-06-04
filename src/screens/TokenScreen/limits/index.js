import React, { useState } from "react";

import { Container } from "./style";
import imgSelected from "../../../assets/selected.svg";

import { ProfileScreen2 } from "src/screens/ProfileScreen2";

export function Limits() {

  // export const SaleDetailScreen: React.FC = () => {
    
  const [isSelected, setIsSelected] = useState("beginner");

  return (
    <Container>
      
      <div className="div-tokens-info">
        <h4 style={{color: "var(--primary-text-color)"}}>
          Direitos e informações do token
        </h4>
        <p style={{color: "var(--primary-text-color)"}}>
          Babitur non nibh id enim finibus finibus ac quis elit. Morbi semper massa laoreet elit finibus, in maximus odio commodo.
          Sed varius volutpat nulla, quis consequat massa maximus eget. Duis maximus dictum purus, convallis molestie lorem ullamcorper at.
        </p>
      </div>

      <div className="div-tokens-schedule">
        <h4 style={{color: "var(--primary-text-color)"}}>
          Cronograma de recebimento
        </h4>
        <p style={{color: "var(--primary-text-color)"}}>
          O montante integral dos recebíveis será distribuído aos titulares dos tokens. O valor que você receberá será proporcional à quantidade de tokens que adquiriu, conforme estabelecido no calendário de pagamentos previsto.
        </p>
      </div>


      {/* <ProfileScreen2/> */}
      
      
    </Container>
  );
}
