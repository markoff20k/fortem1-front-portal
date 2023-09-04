import React, { useState } from "react";
import { Container, Content } from "./style";

import { Mydata } from "./myData";
import { Preferences } from "./preferences";
import { Limits } from "./limits";
import { Security } from "./security";

// import {useSearchParams} from 'react-router-dom';

import { useHistory, useLocation } from 'react-router-dom'



export function Profile() {
  const [internalPage, setInternalPage] = useState(1);

  const queryParameters = new URLSearchParams(window.location.search);
  const urlState = queryParameters.get("internalPage");

  //const [searchParams, setSearchParams] = useSearchParams();

  queryParameters.delete("internalPage");
  queryParameters.set("internalPage", "5");

  //if (urlState) setInternalPage(urlState);
  console.log(urlState);


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
                //onClick={e => history.push('/profile?internalPage=3', {internalPage: 3, setInternalPage: 3})}

                className={internalPage === 3 && "active-menu-header"}
                style={{color: 'var(--primary-text-color)'}}
              >
                Cadastro
              </button>
              <button
                onClick={() => setInternalPage(4)}
                //onClick={history.push('/profile?internalPage=3', {internalPage: 3, setInternalPage: 3})}
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
        {internalPage === 3 || urlState === '3' ? ( 
          <Limits />
        
         ) : internalPage === 2 || urlState === 2 ? (
           <Preferences />
         ) : internalPage === 4 || urlState === 4 ? (
          <Security />
         ) : internalPage === 1  && urlState != '1'? (
          <Mydata />
        ) : (
          {}
        )}
      </Content>
      {queryParameters.delete("internalPage")}
      {queryParameters.set("internalPage", "5")}
      {/* {searchParams.delete('q')}
      {setSearchParams(searchParams)} */}

    </Container>

    
  );
}
