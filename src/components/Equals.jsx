import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState, operatorState, firstCountState } from "../atoms/atom";

const Equals = () => {
  const [display, setDisplay] = useRecoilState(displayState);
  const [operator, setOperator] = useRecoilState(operatorState);
  const [firstCount, setFirstCount] = useRecoilState(firstCountState);

  const handleClick = () => {
    if (!display) return;
    if (operator === "-") {
      const sum = parseFloat(firstCount) - parseFloat(display);
      setDisplay(sum.toString());
      setOperator(null);
    } else if (operator === "+") {
      const sum = parseFloat(firstCount) + parseFloat(display);
      setDisplay(sum.toString());
      setOperator(null);
    } else if (operator === "*") {
      const sum = parseFloat(firstCount) * parseFloat(display);
      setDisplay(sum.toString());
      setOperator(null);
    } else if (operator === "/") {
      const sum = parseFloat(firstCount) / parseFloat(display);
      setDisplay(sum.toString());
      setOperator(null);
    }
  };

  return (
    <Col xs={3} className="b-bottom-row">
      <Button
        id="equals"
        style={{ borderRadius: 0, width: "100%", height: "100%" }}
        onClick={handleClick}
      >
        =
      </Button>
    </Col>
  );
};

export default Equals;
