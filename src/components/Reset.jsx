import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../atoms/atom";

const Reset = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    setDisplay("0");
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
