import React, { useState } from "react";
import { Container, Content } from "./style";

import { Mydata } from "./myData";
import { Preferences } from "./preferences";
import { Limits } from "./limits";
import { Security } from "./security";

export function Profile() {
  const [internalPage, setInternalPage] = useState(1);

  return (
    <Container>
      <Content
        // style={
        //   !props.isOpened ? { maxWidth: "calc(100vw - 200px)", left: 150 } : {}
        // }
      >
        <div className="header-profile">
          <div className="btn-gerencial">
            <p style={{color: 'var(--primary-text-color)'}}>
              Gerenciar perfil
            </p>
            <div style={{display: 'flex'}}>
              <button
                onClick={() => setInternalPage(1)}
                className={internalPage === 1 && "active-menu-header"}
                style={{color: 'var(--primary-text-color)'}}
              >
                Meus dados
              </button>
              <button
                onClick={() => setInternalPage(3)}
                className={internalPage === 3 && "active-menu-header"}
                style={{color: 'var(--primary-text-color)'}}
              >
                Cadastro
              </button>
              <button
                onClick={() => setInternalPage(4)}
                style={{color: 'var(--primary-text-color)'}}
              >
                Segurança
              </button>
              <button
                onClick={() => setInternalPage(2)}
                className={internalPage === 2 && "active-menu-header"}
                style={{color: 'var(--primary-text-color)'}}
              >
                Preferências
              </button>

            </div>
          </div>
        </div>
        {internalPage === 1 ? (
          <Mydata />
         ) : internalPage === 2 ? (
           <Preferences />
         ) : internalPage === 3 ? (
           <Limits />
         ) : internalPage === 4 ? (
           <Security />
        ) : (
          {}
        )}
      </Content>
    </Container>
  );
}
