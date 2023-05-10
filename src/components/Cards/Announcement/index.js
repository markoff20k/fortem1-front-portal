import React, { useEffect } from "react";

import { Container, Content } from "./style";

export function Announcement(props) {

  return (
    <Container>
      {props.announcement.map((result) => (
        <Content>
          <p> 
            {result.description} 
            <span> {result.cta} </span>
          </p>
          {/* <h2> R$ 0,00 </h2> */}
          {/* <button>{result.type === "D" ? "Depositar" : "Ver opções"}</button> */}
        </Content>
      ))}
    </Container>
  );
}
