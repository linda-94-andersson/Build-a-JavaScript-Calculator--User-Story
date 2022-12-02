import react from "react";
import { Button, Col } from "react-bootstrap";

const Zero = () => {
  return (
    <Col style={{ paddingRight: 0 }}>
      <Button
        id="zero"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        0
      </Button>
    </Col>
  );
};

export default Zero;
