import react from "react";
import { Container } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../atoms/atom";

const Display = () => {
  const [display, setDisplay] = useRecoilState(displayState);

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
      {display}
    </Container>
  );
};

export default Display;
