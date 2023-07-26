import React from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState, operatorState, firstCountState } from "../atoms/atom";

const Equals = () => {
  const [display, setDisplay] = useRecoilState(displayState);
  const [operator, setOperator] = useRecoilState(operatorState);
  const [firstCount, setFirstCount] = useRecoilState(firstCountState);

  const removeTrailingZeros = (num) => {
    if (Number.isInteger(num)) {
      return num.toString();
    } else {
      return num.toFixed(4).replace(/\.?0*$/, "");
    }
  };

  const handleClick = () => {
    if (!display || !firstCount) return;

    // If no operator is selected, display the current number
    if (!operator) {
      setDisplay(removeTrailingZeros(parseFloat(display)));
      return;
    }

    // Perform the previous calculation
    performCalculation();
    setOperator(null);
  };

  const performCalculation = () => {
    const firstNum = parseFloat(firstCount);
    const secondNum = parseFloat(display);
    let result;

    if (operator === "-") {
      result = firstNum - secondNum;
    } else if (operator === "+") {
      result = firstNum + secondNum;
    } else if (operator === "*") {
      result = firstNum * secondNum;
    } else if (operator === "/") {
      result = firstNum / secondNum;
    }

    setDisplay(removeTrailingZeros(result));
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
