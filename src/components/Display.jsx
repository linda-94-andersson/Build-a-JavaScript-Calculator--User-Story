import React from "react";
import { Container } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { displayState, operatorState } from "../atoms/atom";

const Display = () => {
  const display = useRecoilValue(displayState);
  const operator = useRecoilValue(operatorState);

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
      {operator === null ? `${display}` : `${operator} ${display}`}
    </Container>
  );
};

export default Display;
