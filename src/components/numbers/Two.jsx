import react from "react";
import { Button, Col } from "react-bootstrap";

const Two = () => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="two"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        2
      </Button>
    </Col>
  );
};

export default Two;
