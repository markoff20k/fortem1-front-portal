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
import { Patrimony } from "../../components/Cards/Patrimony";
import { CarouselSlide } from "../../components/Carousel";
import { TokensSlid } from "../../components/Cards/Tokens";
// import { KnowledgeCards } from "../../components/Cards/Knowledge";
import img1 from "../../assets/image-1.svg";
import img2 from "../../assets/image-2.svg";
import img3 from "../../assets/image-3.svg";
import img4 from "../../assets/image-4.svg";
import imgUSDT from "../../assets/USDT.svg";
import imgBTC from "../../assets/BTC.svg";
import { TabelCripto } from "../../components/Table";
import { QRCode } from "../../components/FastDeposit/QRCode";


import { HomepageMarket } from '../../containers';
import { Sidebar } from '../../containers';

import BlogList from "../../components/blog/itemProp/BlogList";

import BlogClassicData from '../../data/blog/BlogList.json';
import { Link } from "react-router-dom";

import { ReactDimmer } from 'react-dimmer';

var BlogListData = BlogClassicData.slice(0, 6);

export function Dashboard() {
  
  const [fastDeposit, setFastDeposit] = useState(false);

  const patrimony = [
    {
      description: "Patrimônio Total",
      value: "R$ 0,00",
      type: "D",
    },
    {
      description: "Disponível em Reais",
      value: "R$ 0,00",
      type: "D",
    },
    {
      description: "Disponível em Cripto",
      value: "R$ 0,00",
      type: "V",
    },
    {
      description: "Disponível em Token",
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
      
      <Content>
        {/* {!props.user.validation && ( */}
          <Alert>
            <div className="description">
              <img src={imgBell} alt="" />
              {/* <p
                style={props.themeDark ? { color: "#fff" } : { color: "#000" }}
              > */}
              <p>
                A Fortem One preza pela sua segurança, para utilizar todos os recursos da plataforma, você precisa habilitar o duplo fator de autenticação e concluir o seu cadastro, é rápido e simples.
              </p>
            </div>
            <div className="btn">
              <Link to={{pathname: "/security/2fa", state: {enable2fa: true} }}>
                <Button> Habilitar agora </Button>
              </Link>

              
            </div>
          </Alert>
        {/* )} */}
        <CardsPatrimony>
          <Patrimony patrimony={patrimony} />
        </CardsPatrimony>
        <Carousel>
          <Slid>
            <CarouselSlide />
          </Slid>
          <Deposit>
            <div className="header">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Depósito rápido
              </p>
            </div>
            <div className="input-group">
              <p
                style={{ color: "var(--primary-text-color)" }}
              >
                Quanto você quer depositar?
              </p>
              <input className="input" type="text" placeholder="R$ 0,00" />
              <span
                style={{ color: "var(--primary-text-color)" }}
              >
                Você ainda pode depositar: R$ 50.000,00 este mês
              </span>
            </div>
            <div className="buttons">
              <button onClick={() => setFastDeposit(true)} className="btn btn-primary btn-block">Ver dados para depósito</button>
              <button className="btn btn-primary-outline btn-block">Ajustar limite mensal</button>
            </div>
          </Deposit>
        </Carousel>
        {/* <Tokens>
          <div className="highlights">
            <h3 style={{ color: "var(--primary-text-color)" }}>
              Tokens em destaques
            </h3>
            <button
              style={{ color: "var(--primary-text-color)" }}
            >
              Ver todos
            </button>
          </div>
          <SlidTokens>
            <TokensSlid  />

          </SlidTokens>
        </Tokens> */}
        <Criptos>
          <Tables>
            <div className="div-cripto">
              <h4> Visão geral do mercado cripto </h4>
            </div>
            <HomepageMarket/>
          </Tables>
          <Negotiation>
            <Deposit>
              <div className="header">
                <p> Negociação instantânea </p>
              </div>
              <div className="input-group">
                <p> Quanto você quer negociar? </p>
                <div className="input-select">
                  <input
                    // style={{ backgroundImage: `url(${imgUSDT})` }}
                    className="input-insta"
                    type="text"
                    placeholder="R$ 3.045,00"
                  />
                  <select className="select">
                    <option className="option">USDT</option>
                  </select>
                </div>
                <span
                  style={{ color: "var(--primary-text-color)" }}
                >
                  Saldo disponível: R$ 0,00
                </span>
              </div>
              <div className="btn-percent">
                <button
                  style={{ color: "var(--primary-text-color)" }}
                >
                  25%
                </button>
                <button
                  style={{ color: "var(--primary-text-color)" }}
                >
                  50%
                </button>
                <button
                  style={{ color: "var(--primary-text-color)" }}
                >
                  75%
                </button>
                <button
                 style={{ color: "var(--primary-text-color)" }}
                >
                  100%
                </button>
              </div>
              <div className="input">
                <p
                  style={{ color: "var(--primary-text-color)" }}
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
                    { color: "var(--primary-text-color)", marginTop: 10 }
                  }
                >
                  Preço unitário: $ 20.000,00
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
            <p> Arena do conhecimento </p>
            <button
              style={
                 { color: "var(--primary-text-color)" }
              }
            >
              Ver mais
            </button>
          </div>
          <div className="cards-knowledge">
            
            
                {/* <KnowledgeCards
                  themeDark={props.themeDark}
                  images={result.img}
                /> */}
                                            <div className="row row--15">
                                {BlogListData.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                        <BlogList StyleVar="box-card-style-default" data={item} />
                                    </div>
                                ))}
                            </div>
            
            
          </div>
        </Knowledge>
      </Content>
      {fastDeposit && <QRCode setFastDeposit={setFastDeposit} />}
      <ReactDimmer
        				isOpen={fastDeposit}
        				exitDimmer={!setFastDeposit}
        				zIndex={100}
        				blur={10}
						transition={0.5}
      				/>
    </Container>
  );
}
