import react from "react";
import { Button, Col } from "react-bootstrap";

const One = () => {
  return (
    <Col style={{ paddingRight: 0 }}>
      <Button
        id="one"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        1
      </Button>
    </Col>
  );
};

export default One;
