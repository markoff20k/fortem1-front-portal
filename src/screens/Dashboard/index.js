import React, { useState } from "react";

import {
  Container,
  Alert,
  Content,
  Button,
  CardsPatrimony,
  Carousel,
  Slid,
  Deposit,
  SlidTokens,
  Tokens,
  Criptos,
  Tables,
  Negotiation,
  Knowledge,
} from "./style";
import imgBell from "../../assets/bell.svg";
// import { Patrimony } from "../../components/Cards/Patrimony";
import { CarouselSlide } from "../../components/Carousel";
// import { TokensSlid } from "../../components/Cards/Tokens";
// import { KnowledgeCards } from "../../components/Cards/Knowledge";
import img1 from "../../assets/image-1.svg";
import img2 from "../../assets/image-2.svg";
import img3 from "../../assets/image-3.svg";
import img4 from "../../assets/image-4.svg";
import imgUSDT from "../../assets/USDT.svg";
import imgBTC from "../../assets/BTC.svg";
import { TabelCripto } from "../../components/Table";
import { QRCode } from "../../components/QRCode";

export function Dashboard() {
  
  // const [fastDeposit, setFastDeposit] = useState(false);

  const patrimony = [
    {
      description: "Patrimônio total",
      value: "R$ 0,00",
      type: "D",
    },
    {
      description: "Disponível em fiat",
      value: "R$ 0,00",
      type: "D",
    },
    {
      description: "Disponível em cripto",
      value: "R$ 0,00",
      type: "V",
    },
    {
      description: "Investido em Token",
      value: "R$ 0,00",
      type: "V",
    },
  ];

  const images = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];

  return (
    <Container>
      <Content style={{width: "calc(100% - 300px)"}}>
        {/* {!props.user.validation && ( */}
          <Alert>
            <div className="description">
              <img src={imgBell} alt="" />
              {/* <p
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              > */}
                            <p
                
              >

                A Fortem One preza a sua segurança, para utilizar todos os
                recursos da plataforma, você precisa habilitar o duplo fator de autenticação e concluir o seu
                cadastro, é rápido e simples.
              </p>
            </div>
            <div className="btn">
              <Button>Habilitar agora</Button>
            </div>
          </Alert>
        {/* )} */}
        <CardsPatrimony>
          {/* <Patrimony patrimony={patrimony} themeDark={props.themeDark} /> */}
        </CardsPatrimony>
        <Carousel>
          <Slid>
            {/* <CarouselSlide /> */}
          </Slid>
          <Deposit>
            <div className="header">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Depósito rápido
              </p>
            </div>
            <div className="input">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Quanto você quer depostitar?
              </p>
              <input type="text" placeholder="R$ 0,00" />
              <span
                style={{ color: "var(--primary-text-color)" }}
              >
                Você ainda pode depostitar: R$ 150.000,00
              </span>
            </div>
            <div className="buttons">
              <button onClick={() => setFastDeposit(true)} className="btn-ajuste">Ver dados para depósito</button>
              <button className="btn-ver">Ajuste limite mensal</button>
            </div>
          </Deposit>
        </Carousel>
        <Tokens>
          <div className="highlights">
            <h3 style={{ color: "#000" }}>
              Tokens em destaques
            </h3>
            <button
              style={{ color: "#000" }}
            >
              Ver todos
            </button>
          </div>
          {/* <SlidTokens>
            <TokensSlid themeDark={props.themeDark} />
            <TokensSlid themeDark={props.themeDark} />
            <TokensSlid themeDark={props.themeDark} />
            <TokensSlid themeDark={props.themeDark} />
            <TokensSlid themeDark={props.themeDark} />
            <TokensSlid themeDark={props.themeDark} />
          </SlidTokens> */}
        </Tokens>
        <Criptos>
          <Tables>
            <div className="div-cripto">
              <h4
                style={{ color: "#000" }}
              >
                Preço de mercado atual
              </h4>
              <div>
                <button
                  style={
                    { color: "#000" }
                  }
                >
                  Cripto
                </button>
                <button
                  style={
                    { color: "#000" }
                  }
                >
                  Tokens
                </button>
              </div>
            </div>
            <div className="div-cripto2">
              <p
                style={{ color: "#000" }}
              >
                Criptos em alta
              </p>
              <button>Ver todos</button>
            </div>
            {/* <TabelCripto themeDark={props.themeDark} /> */}
          </Tables>
          <Negotiation>
            <Deposit>
              <div className="header">
                <p
                  style={
                    { color: "#000" }
                  }
                >
                  Negociação instantânea
                </p>
              </div>
              <div className="input">
                <p
                  style={
                    { color: "#000" }
                  }
                >
                  Quanto você quer negociar?
                </p>
                <div className="input-select">
                  <input
                    style={{ backgroundImage: `url(${imgUSDT})` }}
                    className="input-insta"
                    type="text"
                    placeholder="R$ 3.045,00"
                  />
                  <select className="select">
                    <option className="option">USDT</option>
                  </select>
                </div>
                <span
                  style={
                     { color: "#000", marginTop: 10 }
                  }
                >
                  Saldo total: R$ 500.000
                </span>
              </div>
              <div className="btn-percent">
                <button
                  style={
                    { color: "#000" }
                  }
                >
                  25%
                </button>
                <button
                  style={
                    { color: "#000" }
                  }
                >
                  50%
                </button>
                <button
                  style={
                    { color: "#000" }
                  }
                >
                  75%
                </button>
                <button
                  style={
                    { color: "#000" }
                  }
                >
                  100%
                </button>
              </div>
              <div className="input">
                <p
                  style={
                    { color: "#000" }
                  }
                >
                  Qual ativo deseja receber?
                </p>
                <div className="input-select">
                  <input
                    style={{
                      backgroundImage: `url(${imgBTC})`,
                    }}
                    className="input-insta"
                    type="text"
                    placeholder="0,1210"
                  />
                  <select className="select">
                    <option className="option">BTC</option>
                  </select>
                </div>

                <span
                  style={
                    { color: "#000", marginTop: 10 }
                  }
                >
                  Preço unitário: $ 120.000,00
                </span>
              </div>
              <div className="buttons">
                <button className="btn-ajuste">Confirmar</button>
              </div>
            </Deposit>
          </Negotiation>
        </Criptos>
        <Knowledge>
          <div className="header-knowledge">
            <p style={ { color: "#000" }}>
              Arena do conhecimento
            </p>
            <button
              style={
                 { color: "#000", marginBottom: 50 }
              }
            >
              Ver todos
            </button>
          </div>
          <div className="cards-knowledge">
            {images.map((result) => (
              <>
                {/* <KnowledgeCards
                  themeDark={props.themeDark}
                  images={result.img}
                /> */}
              </>
            ))}
          </div>
        </Knowledge>
      </Content>
      {/* {fastDeposit && <QRCode setFastDeposit={setFastDeposit} themeDark={props.themeDark} />} */}
    </Container>
  );
}
