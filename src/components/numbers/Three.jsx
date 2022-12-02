import react from "react";
import { Button, Col } from "react-bootstrap";

const Three = () => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="three"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        3
      </Button>
    </Col>
  );
};

export default Three;
