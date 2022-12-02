import react from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import Display from "./components/Display";
import Eight from "./components/numbers/Eight";
import Five from "./components/numbers/Five";
import Four from "./components/numbers/Four";
import Nine from "./components/numbers/Nine";
import One from "./components/numbers/One";
import Seven from "./components/numbers/Seven";
import Six from "./components/numbers/Six";
import Three from "./components/numbers/Three";
import Two from "./components/numbers/Two";
import Zero from "./components/numbers/Zero";
import Add from "./components/operatiors/Add";
import Decimal from "./components/operatiors/Decimal";
import Divide from "./components/operatiors/Divide";
import Equals from "./components/operatiors/Equals";
import Multiply from "./components/operatiors/Multiply";
import Subtrack from "./components/operatiors/Subtrack";
import Reset from "./components/Reset";

function App() {
  return (
    <Container>
      <Display />
      <Container style={{ backgroundColor: "grey", padding: 0 }}>
        <Row>
          <Reset />
          <Divide />
          <Multiply />
        </Row>

        <Row>
          <Seven />
          <Eight />
          <Nine />
          <Subtrack />
        </Row>

        <Row>
          <Four />
          <Five />
          <Six />
          <Add />
        </Row>

        <Row>
          <Col>
            <Row>
              <One />
              <Two />
              <Three />
            </Row>
            <Row>
              <Zero />
              <Decimal />
            </Row>
          </Col>
          <Equals />
        </Row>
      </Container>
    </Container>
  );
}

export default App;
