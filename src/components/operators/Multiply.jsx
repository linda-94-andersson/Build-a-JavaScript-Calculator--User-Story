import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState, firstCountState, operatorState } from "../../atoms/atom";

const Multiply = () => {
  const [operator, setOperator] = useRecoilState(operatorState);
  const [display, setDisplay] = useRecoilState(displayState);
  const [firstCount, setFirstCount] = useRecoilState(firstCountState);

  const handleClick = () => {
    if (!display) return;
    setOperator("*");
    setFirstCount(display);
    setDisplay("");
    if (operator === "-") {
      const sum = parseFloat(firstCount) - parseFloat(display);
      setDisplay(sum.toString());
      setOperator("*");
      setFirstCount(sum.toString());
      setDisplay("");
    } else if (operator === "+") {
      const sum = parseFloat(firstCount) + parseFloat(display);
      setDisplay(sum.toString());
      setOperator("*");
      setFirstCount(sum.toString());
      setDisplay("");
    } else if (operator === "*") {
      const sum = parseFloat(firstCount) * parseFloat(display);
      setDisplay(sum.toString());
      setOperator("*");
      setFirstCount(sum.toString());
      setDisplay("");
    } else if (operator === "/") {
      const sum = parseFloat(firstCount) / parseFloat(display);
      setDisplay(sum.toString());
      setOperator("*");
      setFirstCount(sum.toString());
      setDisplay("");
    }
  };

  return (
    <Col style={{ paddingLeft: 0 }}>
      <Button
        id="multiply"
        style={{ borderRadius: 0, width: "100%" }}
        variant="secondary"
        onClick={handleClick}
      >
        x
      </Button>
    </Col>
  );
};

export default Multiply;
