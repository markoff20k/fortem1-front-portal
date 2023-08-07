import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./carousel-token.svg";

export function CarouselToken() {
  return (
    <Carousel interval={3000} className="carousel-token">
      <Carousel.Item>
        <Carousel.Caption className="control">
          <h1 >
            Título do artigo sobre tokens
          </h1>
          <p >
            Texto sobre a notícia principal com uma chamada para o usuário
            <br />
            clicar no banner em até 2 linhas.
          </p>
          <button className="btn-carousel-token">Ver mais</button>
        </Carousel.Caption>
        <img className="img-carousel-token" src={img} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="control">
          <h1 style={props.themeDark ? { color: "#fff" } : { color: "#fff" }}>
            Título do artigo sobre tokens
          </h1>
          <p style={props.themeDark ? { color: "#fff" } : { color: "#fff" }}>
            Texto sobre a notícia principal com uma chamada para o usuário
            <br />
            clicar no banner em até 2 linhas.
          </p>
          <button className="btn-carousel-token">Ver mais</button>
        </Carousel.Caption>
        <img className="img-carousel-token" src={img} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="control">
          <h1 >
            Título do artigo sobre tokens
          </h1>
          <p >
            Texto sobre a notícia principal com uma chamada para o usuário
            <br />
            clicar no banner em até 2 linhas.
          </p>
          <button className="btn-carousel-token">Ver mais</button>
        </Carousel.Caption>
        <img className="img-carousel-token" src={img} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="control">
          <h1 >
            Título do artigo sobre tokens
          </h1>
          <p >
            Texto sobre a notícia principal com uma chamada para o usuário
            <br />
            clicar no banner em até 2 linhas.
          </p>
          <button className="btn-carousel-token">Ver mais</button>
        </Carousel.Caption>
        <img className="img-carousel-token" src={img} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}
