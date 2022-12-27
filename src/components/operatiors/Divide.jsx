import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { operatorState } from "../../atoms/atom";

const Divide = () => {
  const [operator, setOperator] = useRecoilState(operatorState);

  const handleClick = () => {
    setOperator("/");
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
