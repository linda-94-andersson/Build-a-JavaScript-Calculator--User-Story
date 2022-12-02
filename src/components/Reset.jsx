import react from "react";
import { Button, Col } from "react-bootstrap";

const Reset = () => {
  return (
    <Col xs={6} style={{ paddingRight: 0 }}>
      <Button
        id="clear"
        style={{ borderRadius: 0, width: "100%" }}
        variant="danger"
      >
        AC
      </Button>
    </Col>
  );
};

export default Reset;
