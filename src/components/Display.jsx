import react from "react";
import { Container } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState, operatorState } from "../atoms/atom";

const Display = () => {
  const [display, setDisplay] = useRecoilState(displayState);
  const [operator, setOperator] = useRecoilState(operatorState);

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
