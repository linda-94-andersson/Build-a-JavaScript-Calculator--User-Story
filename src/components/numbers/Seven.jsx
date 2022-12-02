import react from "react";
import { Button, Col } from "react-bootstrap";

const Seven = () => {
  return (
    <Col style={{ paddingRight: 0 }}>
      <Button
        id="seven"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        7
      </Button>
    </Col>
  );
};

export default Seven;
