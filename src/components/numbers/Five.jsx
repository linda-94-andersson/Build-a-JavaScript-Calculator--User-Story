import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Five = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("5");
    } else {
      setDisplay(display + "5");
    }
  };

  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="five"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        5
      </Button>
    </Col>
  );
};

export default Five;
