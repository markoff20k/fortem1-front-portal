import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export function KnowledgeCards(props) {
  return (
    <Card className="card">
      <Card.Img className="cardImgKnowledge" variant="top" src={props.images} />
      <Card.Body className="cardBodyKnowledge">
        <Card.Text>
          <h3 className="h3-card" style={props.themeDark ? { color: "#fff" } : { color: "#000" }}>
            O que é Tokenização
          </h3>
          <p
          className="text-card"
            style={
              props.themeDark
                ? { color: "#fff", fontSize: 18 }
                : { color: "#000", fontSize: 18 }
            }
          >
            Texto resumido falando sobre
            <br />
            o tema da postagem em até
            <br />3 linhas.
          </p>
        </Card.Text>
        <button>Var mais</button>
      </Card.Body>
    </Card>
  );
}
