import react from "react";
import { Button, Col } from "react-bootstrap";

const Four = () => {
  return (
    <Col style={{ paddingRight: 0 }}>
      <Button
        id="four"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        4
      </Button>
    </Col>
  );
};

export default Four;
