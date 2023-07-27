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
    } else if (display === "-") {
      setDisplay(`-${num}`);
    } else {
      setDisplay((prevDisplay) => prevDisplay + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (!operator) {
      if (op === "-") {
        // Handle negative sign as a separate case
        if (display === "0") {
          setDisplay("-");
        } else {
          setOperator(op);
          setFirstCount(display);
          setDisplay((prevDisplay) => prevDisplay + op);
        }
      } else {
        // Handle other operators
        setOperator(op);
        setFirstCount(display);
        setDisplay((prevDisplay) => prevDisplay + op);
      }
    } else {
      // Allow chaining of operators indefinitely
      if (op === "-") {
        if (!/[+\/*-]$/.test(display)) {
          // Only add '-' if the last character is not an operator
          setOperator(op);
          setDisplay((prevDisplay) => prevDisplay + op);
        }
      } else {
        if (!/[+\/*-]$/.test(display)) {
          // Only add the operator if the last character is not an operator
          setOperator(op);
          setDisplay((prevDisplay) => prevDisplay + op);
        }
      }
    }
  };
  
  

  // const handleEquals = () => {
  //   if (!operator) return;

  //   const firstNum = parseFloat(firstCount);
  //   const secondNum = parseFloat(display);
  //   let result;

  //   if (operator === "-") {
  //     result = firstNum - secondNum;
  //   } else if (operator === "+") {
  //     result = firstNum + secondNum;
  //   } else if (operator === "*") {
  //     result = firstNum * secondNum;
  //   } else if (operator === "/") {
  //     result = firstNum / secondNum;
  //   }

  //   setDisplay(result.toString());
  //   setFirstCount(result.toString());
  //   setOperator(null);
  // };

  const handleClear = () => {
    setDisplay("0");
    setOperator(null);
    setFirstCount(null);
  };

  const handleDecimal = () => {
    const tokens = display.split(/[+\-*/]/);
    const lastToken = tokens[tokens.length - 1];

    if (lastToken.includes(".")) {
      return;
    }

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
            <Button variant="danger" id="clear" onClick={() => handleClear()}>
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
                <Button
                  variant="dark"
                  id="decimal"
                  onClick={() => handleDecimal()}
                >
                  .
                </Button>
              </Row>
            </Col>
            <Button
              variant="primary"
              id="equals"
              onClick={() => handleEquals()}
            >
              =
            </Button>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Calculator;
