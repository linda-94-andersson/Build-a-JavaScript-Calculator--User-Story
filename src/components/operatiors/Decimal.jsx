import react from "react";
import { Button, Col } from "react-bootstrap";

const Decimal = () => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="decimal"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        .
      </Button>
    </Col>
  );
};

export default Decimal;
