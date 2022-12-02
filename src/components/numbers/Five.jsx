import react from "react";
import { Button, Col } from "react-bootstrap";

const Five = () => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="five"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        5
      </Button>
    </Col>
  );
};

export default Five;
