import react from "react";
import { Button, Col } from "react-bootstrap";

const Nine = () => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="nine"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
      >
        9
      </Button>
    </Col>
  );
};

export default Nine;
