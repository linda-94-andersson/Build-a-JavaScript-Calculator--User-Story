import react from "react";
import { Button, Col } from "react-bootstrap";

const Subtrack = () => {
  return (
    <Col style={{ paddingLeft: 0 }}>
      <Button
        id="subtract"
        style={{ borderRadius: 0, width: "100%" }}
        variant="secondary"
      >
        -
      </Button>
    </Col>
  );
};

export default Subtrack;
