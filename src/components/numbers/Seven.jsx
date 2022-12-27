import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Seven = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("7");
    } else {
      setDisplay(display + "7");
    }
  };

  return (
    <Col style={{ paddingRight: 0 }}>
      <Button
        id="seven"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        7
      </Button>
    </Col>
  );
};

export default Seven;
