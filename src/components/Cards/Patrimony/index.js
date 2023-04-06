import React, { useEffect } from "react";

import { Container, Content } from "./style";

export function Patrimony(props) {
  useEffect(() => {
    console.log(props.patrimony);
  }, []);
  return (
    <Container>
      {props.patrimony.map((result) => (
        <Content>
          <p style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
            {result.description}
          </p>
          <h2 style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
            R$ 0,00
          </h2>
          <button>{result.type === "D" ? "Depositar" : "Ver opções"}</button>
        </Content>
      ))}
    </Container>
  );
}
