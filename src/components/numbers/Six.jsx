import react from "react";
import { Button, Col } from "react-bootstrap";

const Six = () => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="six"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        6
      </Button>
    </Col>
  );
};

export default Six;
