import React from "react";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../assets/Card-slid-1.svg";

export function CarouselSlide() {
  return (
    <Carousel interval={3000} className="carousel">
      <Carousel.Item>
        <Carousel.Caption>
          <h1 style={{ color: "var(--input-text-color)" }}>
            Utilize seus tokens para realizar transações e pagamentos
          </h1>
          <p style={{ color: "var(--input-text-color)" }}>
            São várias opções de rentabilidade, prazos para resgate e
            investimento mínimo. Tudo com a tecnologia da Fotem ONE e segurança
            da blockchain.
          </p>
          <button className="btn-caption">Conheça as opções</button>
        </Carousel.Caption>
        <img
          // style={!props.isOpened ? {} : { marginLeft: 490 }}
          // className="d-block w-100"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h1 style={{ color: "var(--input-text-color)" }} >
            Utilize seus tokens para realizar transações e pagamentos
          </h1>
          <p style={{ color: "var(--input-text-color)", marginTop: '10px' }}>
            São várias opções de rentabilidade, prazos para resgate e
            investimento mínimo. Tudo com a tecnologia da Fotem ONE e segurança
            da blockchain. (2)
          </p>
          <button className="btn-caption">Conheça as opções</button>
        </Carousel.Caption>
        <img
          // style={!props.isOpened ? {} : { marginLeft: 490 }}
          // className="d-block w-100"
          src={img}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h1 style={{ color: "var(--input-text-color)" }}>
            Utilize seus tokens para realizar transações e pagamentos
          </h1>
          <p style={{ color: "var(--input-text-color)", marginTop: '10px' }}>
            São várias opções de rentabilidade, prazos para resgate e
            investimento mínimo. Tudo com a tecnologia da Fotem ONE e segurança
            da blockchain. (3)
          </p>
          <button className="btn-caption">Conheça as opções</button>
        </Carousel.Caption>
        <img
          // style={!props.isOpened ? {} : { marginLeft: 490 }}
          // className="d-block w-100"
          src={img}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
