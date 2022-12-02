import react from "react";
import { Button, Col } from "react-bootstrap";

const Eight = () => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="eight"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        8
      </Button>
    </Col>
  );
};

export default Eight;
