import react from "react";
import { Button, Col } from "react-bootstrap";

const Equals = () => {
  return (
    <Col xs={3} className="b-bottom-row">
      <Button
        id="equals"
        style={{ borderRadius: 0, width: "100%", height: "100%" }}
      >
        =
      </Button>
    </Col>
  );
};

export default Equals;
