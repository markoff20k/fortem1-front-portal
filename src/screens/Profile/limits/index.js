import React, { useState } from "react";

import { Container } from "./style";
import imgSelected from "../../../assets/selected.svg";

import { ProfileScreen2 } from "src/screens/ProfileScreen2";

export function Limits() {
  const [isSelected, setIsSelected] = useState("beginner");

  return (
    <Container>
      
      <div className="div-header-limits">
        <h4 style={{color: "var(--primary-text-color)"}}>
          Limites de operações
        </h4>
        <p style={{color: "var(--primary-text-color)"}}>
          Valide seus dados pessoais e documentos para liberar novas
          funcionalidades. Análise em até 24 horas.
        </p>
      </div>
      <ProfileScreen2/>
      
      
    </Container>
  );
}
