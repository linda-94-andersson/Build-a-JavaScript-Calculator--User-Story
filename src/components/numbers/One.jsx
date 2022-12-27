import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const One = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("1");
    } else {
      setDisplay(display + "1");
    }
  };

  return (
    <Col style={{ paddingRight: 0 }}>
      <Button
        id="one"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        1
      </Button>
    </Col>
  );
};

export default One;
