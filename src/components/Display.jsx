import React from "react";
import { Container } from "react-bootstrap";

const Display = ({ value }) => {
  return (
    <Container
      id="display"
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {value}
    </Container>
  );
};

export default Display;
