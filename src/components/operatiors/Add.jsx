import react from "react";
import { Button, Col } from "react-bootstrap";

const Add = () => {
  return (
    <Col style={{ paddingLeft: 0 }}>
      <Button
        id="add"
        style={{ borderRadius: 0, width: "100%" }}
        variant="secondary"
      >
        +
      </Button>
    </Col>
  );
};

export default Add;
