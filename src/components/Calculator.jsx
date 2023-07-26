import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstCount, setFirstCount] = useState(null);

  const handleNumberClick = (num) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay((prevDisplay) => prevDisplay + num);
    }
  };

  const handleOperatorClick = (op) => {
    setDisplay((prevDisplay) => prevDisplay + op);
  };

  const handleEquals = () => {
    if (!operator) return;

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

    setDisplay(result.toFixed(1)); // Format the result with one decimal place
    setFirstCount(null);
    setOperator(null);
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleDecimal = () => {
    // Split the display into tokens based on operators
    const tokens = display.split(/[+\-*/]/);
    const lastToken = tokens[tokens.length - 1];

    // If the last token already contains a decimal, do not add another one
    if (lastToken.includes(".")) {
      return;
    }

    // If there is no last token or it's an operator, add a leading zero before the decimal
    if (!lastToken || /[+\-*/]/.test(lastToken)) {
      setDisplay((prevDisplay) => prevDisplay + "0.");
    } else {
      setDisplay((prevDisplay) => prevDisplay + ".");
    }
  };

  return (
    <Container style={{ height: "100vw", paddingTop: 50 }}>
      <Container>
        <Display value={display} />
        <Container style={{ backgroundColor: "grey", padding: 0 }}>
          <Row>
            <Button variant="danger" id="clear" onClick={handleClear}>
              AC
            </Button>
            <Button id="divide" onClick={() => handleOperatorClick("/")}>
              /
            </Button>
            <Button id="multiply" onClick={() => handleOperatorClick("*")}>
              x
            </Button>
          </Row>

          <Row>
            <Button
              variant="dark"
              id="seven"
              onClick={() => handleNumberClick("7")}
            >
              7
            </Button>
            <Button
              variant="dark"
              id="eight"
              onClick={() => handleNumberClick("8")}
            >
              8
            </Button>
            <Button
              variant="dark"
              id="nine"
              onClick={() => handleNumberClick("9")}
            >
              9
            </Button>
            <Button id="subtract" onClick={() => handleOperatorClick("-")}>
              -
            </Button>
          </Row>

          <Row>
            <Button
              variant="dark"
              id="four"
              onClick={() => handleNumberClick("4")}
            >
              4
            </Button>
            <Button
              variant="dark"
              id="five"
              onClick={() => handleNumberClick("5")}
            >
              5
            </Button>
            <Button
              variant="dark"
              id="six"
              onClick={() => handleNumberClick("6")}
            >
              6
            </Button>
            <Button id="add" onClick={() => handleOperatorClick("+")}>
              +
            </Button>
          </Row>

          <Row>
            <Col>
              <Row>
                <Button
                  variant="dark"
                  id="one"
                  onClick={() => handleNumberClick("1")}
                >
                  1
                </Button>
                <Button
                  variant="dark"
                  id="two"
                  onClick={() => handleNumberClick("2")}
                >
                  2
                </Button>
                <Button
                  variant="dark"
                  id="three"
                  onClick={() => handleNumberClick("3")}
                >
                  3
                </Button>
              </Row>
              <Row>
                <Button
                  variant="dark"
                  id="zero"
                  onClick={() => handleNumberClick("0")}
                >
                  0
                </Button>
                <Button variant="dark" id="decimal" onClick={handleDecimal}>
                  .
                </Button>
              </Row>
            </Col>
            <Button variant="primary" id="equals" onClick={handleEquals}>
              =
            </Button>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Calculator;
