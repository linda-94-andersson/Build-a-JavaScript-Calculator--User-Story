import react from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Container
        id="display"
        style={{ backgroundColor: "black", color: "white" }}
      >
        Display calc here 0
      </Container>
      <Container style={{ backgroundColor: "grey", padding: 0 }}>
        <Row>
          <Col xs={6} style={{ paddingRight: 0 }}>
            <Button
              id="clear"
              style={{ borderRadius: 0, width: "100%" }}
              variant="danger"
            >
              AC
            </Button>
          </Col>
          <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Button
              id="divide"
              style={{ borderRadius: 0, width: "100%" }}
              variant="secondary"
            >
              /
            </Button>
          </Col>
          <Col style={{ paddingLeft: 0 }}>
            <Button
              id="multiply"
              style={{ borderRadius: 0, width: "100%" }}
              variant="secondary"
            >
              x
            </Button>
          </Col>
        </Row>

        <Row>
          <Col style={{ paddingRight: 0 }}>
            <Button
              id="seven"
              style={{ borderRadius: 0, width: "100%" }}
              variant="dark"
            >
              7
            </Button>
          </Col>
          <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Button
              id="eight"
              style={{ borderRadius: 0, width: "100%" }}
              variant="dark"
            >
              8
            </Button>
          </Col>
          <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Button
              id="nine"
              style={{ borderRadius: 0, width: "100%" }}
              variant="dark"
            >
              9
            </Button>
          </Col>
          <Col style={{ paddingLeft: 0 }}>
            <Button
              id="subtract"
              style={{ borderRadius: 0, width: "100%" }}
              variant="secondary"
            >
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col style={{ paddingRight: 0 }}>
            <Button
              id="four"
              style={{ borderRadius: 0, width: "100%" }}
              variant="dark"
            >
              4
            </Button>
          </Col>
          <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Button
              id="five"
              style={{ borderRadius: 0, width: "100%" }}
              variant="dark"
            >
              5
            </Button>
          </Col>
          <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Button
              id="six"
              style={{ borderRadius: 0, width: "100%" }}
              variant="dark"
            >
              6
            </Button>
          </Col>
          <Col style={{ paddingLeft: 0 }}>
            <Button
              id="add"
              style={{ borderRadius: 0, width: "100%" }}
              variant="secondary"
            >
              +
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col style={{ paddingRight: 0 }}>
                <Button
                  id="one"
                  style={{ borderRadius: 0, width: "100%" }}
                  variant="dark"
                >
                  1
                </Button>
              </Col>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Button
                  id="two"
                  style={{ borderRadius: 0, width: "100%" }}
                  variant="dark"
                >
                  2
                </Button>
              </Col>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Button
                  id="three"
                  style={{ borderRadius: 0, width: "100%" }}
                  variant="dark"
                >
                  3
                </Button>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingRight: 0 }}>
                <Button
                  id="zero"
                  style={{ borderRadius: 0, width: "100%" }}
                  variant="dark"
                >
                  0
                </Button>
              </Col>
              <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Button
                  id="decimal"
                  style={{ borderRadius: 0, width: "100%" }}
                  variant="dark"
                >
                  .
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={3} style={{ paddingLeft: 0, width: "26.1%" }}>
            <Button
              id="equals"
              style={{ borderRadius: 0, width: "100%", height: "100%" }}
            >
              =
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
