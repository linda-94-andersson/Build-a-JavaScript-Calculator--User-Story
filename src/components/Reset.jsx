import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState, operatorState, firstCountState } from "../atoms/atom";

const Reset = () => {
  const [display, setDisplay] = useRecoilState(displayState);
  const [operator, setOperator] = useRecoilState(operatorState);
  const [firstCount, setFirstCount] = useRecoilState(firstCountState);

  const handleClick = () => {
    setDisplay("0");
    setOperator(null);
    setFirstCount(null);
  };

  return (
    <Col xs={6} style={{ paddingRight: 0 }}>
      <Button
        id="clear"
        style={{ borderRadius: 0, width: "100%" }}
        variant="danger"
        onClick={handleClick}
      >
        AC
      </Button>
    </Col>
  );
};

export default Reset;
