import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Six = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("6");
    } else {
      setDisplay(display + "6");
    }
  };

  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="six"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        6
      </Button>
    </Col>
  );
};

export default Six;
