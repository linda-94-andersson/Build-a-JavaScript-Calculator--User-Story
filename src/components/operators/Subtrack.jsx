import React from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState, firstCountState, operatorState } from "../../atoms/atom";

const Subtract = () => {
  const [operator, setOperator] = useRecoilState(operatorState);
  const [display, setDisplay] = useRecoilState(displayState);
  const [firstCount, setFirstCount] = useRecoilState(firstCountState);

  const handleClick = () => {
    if (!firstCount) {
      setOperator("-");
      setFirstCount(display);
    } else {
      performCalculation();
      setOperator("-");
      setFirstCount(display);
    }
    setDisplay("");
  };

  const performCalculation = () => {
    if (operator === "-") {
      const sum = parseFloat(firstCount) - parseFloat(display);
      setDisplay(sum.toString());
    } else if (operator === "+") {
      const sum = parseFloat(firstCount) + parseFloat(display);
      setDisplay(sum.toString());
    } else if (operator === "*") {
      const sum = parseFloat(firstCount) * parseFloat(display);
      setDisplay(sum.toString());
    } else if (operator === "/") {
      const sum = parseFloat(firstCount) / parseFloat(display);
      setDisplay(sum.toString());
    }
  };

  return (
    <Col style={{ paddingLeft: 0 }}>
      <Button
        id="subtract"
        style={{ borderRadius: 0, width: "100%" }}
        variant="secondary"
        onClick={handleClick}
      >
        -
      </Button>
    </Col>
  );
};

export default Subtract;
