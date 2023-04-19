import Card from "react-bootstrap/Card";
import img from "../../../assets/logo-dark.svg";
import imgTokens from "../../../assets/logo-icon-dark.svg";
import imgChecked from "../../../assets/checked.svg";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import "bootstrap/dist/css/bootstrap.min.css";

export function TokensSlid() {

  return (

    <Card className="card">
      <span>Em captação</span>
      <Card.Img className="cardImg" variant="top" src={img} />
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">
          <div>
            <img src={imgTokens} alt="" />
          </div>
          <p>Fortem one</p>
          <img className="validation" src={imgChecked} alt="" />
        </Card.Title>
        <Card.Text>
          <div className="div-description1">
            <p>
              <strong>token $BTO</strong>
            </p>
            <p>
              <strong>R$25,00</strong>
            </p>
          </div>
          <div className="div-description2">
            <p>
              <strong style={{ color: "#000" }}>Pgto juros mensal</strong>
            </p>
            <p>
              <strong>1.52% a.m</strong>
            </p>
          </div>
          <div className="div-description3">
            <p>
              <strong style={{ color: "#000" }}>Carência</strong>
            </p>
            <p>
              <strong style={{ color: "#000" }}>90 dias</strong>
            </p>
          </div>
          <div className="evolution">
            <div className="div-description3">
              <p>Valor captado</p>
              <p>Total</p>
            </div>
            {/* <ProgressBar className="progress" now={60} /> */}
            <div className="div-description3">
              <p>R$ 461.925</p>
              <p>R$ 500.000</p>
            </div>
          </div>
          <div className="btn-token">
            <button>Comprar token</button>

          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
