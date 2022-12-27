import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Three = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("3");
    } else {
      setDisplay(display + "3");
    }
  };
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="three"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        3
      </Button>
    </Col>
  );
};

export default Three;
