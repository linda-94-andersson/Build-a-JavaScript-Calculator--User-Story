import react from "react";
import { Button, Col } from "react-bootstrap";

const Divide = () => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="divide"
        style={{ borderRadius: 0, width: "100%" }}
        variant="secondary"
      >
        /
      </Button>
    </Col>
  );
};

export default Divide;
