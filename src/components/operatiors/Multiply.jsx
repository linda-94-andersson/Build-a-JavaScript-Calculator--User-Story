import react from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

const Multiply = () => {
  return (
    <Col style={{ paddingLeft: 0 }}>
      <Button
        id="multiply"
        style={{ borderRadius: 0, width: "100%" }}
        variant="secondary"
      >
        x
      </Button>
    </Col>
  );
};

export default Multiply;
