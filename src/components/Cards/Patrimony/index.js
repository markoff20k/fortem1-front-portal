import React, { useEffect } from "react";

import { Container, Content } from "./style";

export function Patrimony(props) {

  return (
    <Container>
      {props.patrimony.map((result) => (
        <Content>
          <p> {result.description} </p>
          <h2> {result.value} </h2>
          <button>{result.type === "D" ? "Depositar" : "Ver alocação"}</button>
        </Content>
      ))}
    </Container>
  );
}
