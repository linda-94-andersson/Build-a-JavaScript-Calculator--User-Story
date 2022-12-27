import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { operatorState, displayState, firstCountState } from "../../atoms/atom";

const Divide = () => {
  const [operator, setOperator] = useRecoilState(operatorState);
  const [display, setDisplay] = useRecoilState(displayState);
  const [firstCount, setFirstCount] = useRecoilState(firstCountState);

  const handleClick = () => {
    if (!display) return;
    setOperator("/");
    setFirstCount(display);
    setDisplay("");
  };

  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="divide"
        style={{ borderRadius: 0, width: "100%" }}
        variant="secondary"
        onClick={handleClick}
      >
        /
      </Button>
    </Col>
  );
};

export default Divide;